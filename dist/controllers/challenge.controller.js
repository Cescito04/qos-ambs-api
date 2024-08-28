"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const api_management_controller_1 = require("./api-management.controller");
let ChallengeController = class ChallengeController {
    constructor(challengeRepository, souscriptionRepository, datahistoryRepository, ambassadorRepository, // Ajouter le repository des ambassadeurs
    apiManagementController, zoningRepository) {
        this.challengeRepository = challengeRepository;
        this.souscriptionRepository = souscriptionRepository;
        this.datahistoryRepository = datahistoryRepository;
        this.ambassadorRepository = ambassadorRepository;
        this.apiManagementController = apiManagementController;
        this.zoningRepository = zoningRepository;
    }
    async create(challenge) {
        const newChallenge = await this.challengeRepository.create(challenge);
        await this.notifyAmbassadors(newChallenge);
        return newChallenge;
    }
    async notifyAmbassadors(challenge) {
        const ambassadors = await this.ambassadorRepository.find();
        const token = await this.apiManagementController.auth();
        for (const ambassador of ambassadors) {
            const message = `Nouveau challenge créé : ${challenge.nom}`;
            const numero = ambassador.numero;
            await this.apiManagementController.sendSMS(numero, message);
            // console.log(`Message envoyé à ${ambassador.nom} ${ambassador.prenom} au numéro ${numero}`);
        }
    }
    async count(where) {
        return this.challengeRepository.count(where);
    }
    async find(filter) {
        return this.challengeRepository.find(filter);
    }
    async updateAll(challenge, where) {
        return this.challengeRepository.updateAll(challenge, where);
    }
    async findById(id, filter) {
        return this.challengeRepository.findById(id, filter);
    }
    async getClassement(challengeId) {
        return await this.calculeScore(challengeId);
    }
    async calculeScore(id) {
        const challenge = await this.challengeRepository.findById(id);
        let departementCoordinates = null;
        if (challenge.zone) {
            const zoning = await this.zoningRepository.findOne({
                where: { 'attributes.NOM': challenge.zone },
            });
            if (!zoning || !zoning.geometry || !zoning.geometry.rings) {
                throw new Error('Département non trouvé ou sans coordonnées');
            }
            departementCoordinates = zoning.geometry.rings;
        }
        const filter = {
            where: { challengeId: challenge.id },
            include: [
                {
                    relation: 'ambassador',
                    scope: {
                        include: [{
                                relation: 'datahistories',
                                scope: {
                                    where: {
                                        and: [
                                            { techno: challenge.techno },
                                            { date: { gte: challenge.date_debut } },
                                            { date: { lte: challenge.date_fin } },
                                        ]
                                    }
                                }
                            }],
                    },
                },
            ],
        };
        if (challenge.type !== 'all') {
            filter.include[0].scope.include[0].scope.where.and.push({ type: challenge.type });
        }
        const souscriptions = await this.souscriptionRepository.find(filter);
        const classements = [];
        souscriptions.forEach(souscription => {
            let dlAvg = 0;
            let ulAvg = 0;
            let numTests = 0;
            let score = 0;
            if (souscription.ambassador && souscription.ambassador.datahistories && souscription.ambassador.datahistories.length > 0) {
                const filteredDatahistories = souscription.ambassador.datahistories.filter((data) => {
                    if (departementCoordinates) {
                        const isInDepartment = this.isPointInPolygon([data.longitude, data.latitude], departementCoordinates);
                        return isInDepartment && new Date(data.date) >= new Date(souscription.date);
                    }
                    else {
                        return new Date(data.date) >= new Date(souscription.date);
                    }
                });
                if (filteredDatahistories.length > 0) {
                    const dlValues = filteredDatahistories.map((dh) => dh.download);
                    const ulValues = filteredDatahistories.map((dh) => dh.upload);
                    dlAvg = this.calculateAverage(dlValues);
                    ulAvg = this.calculateAverage(ulValues);
                    numTests = filteredDatahistories.length;
                    score = Math.round(((dlAvg * 0.65) + (ulAvg * 0.25)) * (numTests * 0.10));
                }
            }
            if (souscription.ambassador)
                classements.push({
                    id: souscription.ambassador.id,
                    nom: souscription.ambassador.nom,
                    prenom: souscription.ambassador.prenom,
                    score: score
                });
        });
        return classements;
    }
    isPointInPolygon(point, rings) {
        const [px, py] = point;
        let isInside = false;
        for (const ring of rings) {
            let ringIsInside = false;
            for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
                const [ix, iy] = ring[i];
                const [jx, jy] = ring[j];
                const intersect = ((iy > py) !== (jy > py)) && (px < (jx - ix) * (py - iy) / (jy - iy) + ix);
                if (intersect) {
                    ringIsInside = !ringIsInside;
                }
            }
            isInside = isInside || ringIsInside;
        }
        return isInside;
    }
    calculateAverage(values) {
        if (values.length === 0)
            return 0;
        const sum = values.reduce((acc, value) => acc + value, 0);
        return sum / values.length;
    }
    async updateById(id, challenge) {
        await this.challengeRepository.updateById(id, challenge);
    }
    async replaceById(id, challenge) {
        await this.challengeRepository.replaceById(id, challenge);
    }
    async deleteById(id) {
        await this.challengeRepository.deleteById(id);
    }
    async getClassements(challengeId, ambassadorId) {
        return await this.calculeScores(challengeId, ambassadorId);
    }
    async calculeScores(challengeId, ambassadorId) {
        const challenge = await this.challengeRepository.findById(challengeId);
        // Initialisation des variables pour la zone
        let departementCoordinates = null;
        let zoneNom = null;
        // Vérifier si une zone est définie et récupérer ses coordonnées
        if (challenge.zone) {
            const zoning = await this.zoningRepository.findOne({
                where: { 'attributes.NOM': challenge.zone },
            });
            if (zoning && zoning.geometry && zoning.geometry.rings) {
                departementCoordinates = zoning.geometry.rings;
                zoneNom = challenge.zone;
            }
            else {
                throw new Error('Département non trouvé ou sans coordonnées');
            }
        }
        const filter = {
            where: { challengeId: challenge.id, ambassadorId: ambassadorId },
            include: [
                {
                    relation: 'ambassador',
                    scope: {
                        include: [{
                                relation: 'datahistories',
                                scope: {
                                    where: {
                                        and: [
                                            { techno: challenge.techno },
                                            { date: { gte: challenge.date_debut } },
                                            { date: { lte: challenge.date_fin } },
                                        ]
                                    }
                                }
                            }],
                    },
                },
            ],
        };
        if (challenge.type !== 'all') {
            filter.include[0].scope.include[0].scope.where.and.push({ type: challenge.type });
        }
        const souscriptions = await this.souscriptionRepository.find(filter);
        const classements = [];
        souscriptions.forEach(souscription => {
            let dlAvg = 0;
            let ulAvg = 0;
            let numTests = 0;
            let score = 0;
            let debit = 0;
            let historique = [];
            if (souscription.ambassador.datahistories && souscription.ambassador.datahistories.length > 0) {
                const filteredDatahistories = souscription.ambassador.datahistories.filter((data) => {
                    if (departementCoordinates) {
                        const isInDepartment = this.isPointInPolygon([data.longitude, data.latitude], departementCoordinates);
                        return isInDepartment && new Date(data.date) >= new Date(souscription.date);
                    }
                    else {
                        return new Date(data.date) >= new Date(souscription.date);
                    }
                });
                if (filteredDatahistories.length > 0) {
                    const dlValues = filteredDatahistories.map((dh) => dh.download);
                    const ulValues = filteredDatahistories.map((dh) => dh.upload);
                    dlAvg = this.calculateAverage(dlValues);
                    ulAvg = this.calculateAverage(ulValues);
                    numTests = filteredDatahistories.length;
                    score = Math.round(((dlAvg * 0.65) + (ulAvg * 0.25)) * (numTests * 0.10));
                    debit = Math.round(((dlAvg + ulAvg) / 2));
                    historique = filteredDatahistories; // Stocker tout l'historique
                }
            }
            const classement = {
                nom: souscription.ambassador.nom,
                prenom: souscription.ambassador.prenom,
                moyUL: ulAvg,
                moyDl: dlAvg,
                debitMoy: debit,
                testCount: numTests,
                historique: historique // Inclure tout l'historique
            };
            // Inclure les informations de la zone seulement si elles sont disponibles
            if (zoneNom && departementCoordinates) {
                classement.zone = {
                    nom: zoneNom,
                    rings: departementCoordinates
                };
            }
            classements.push(classement);
        });
        return classements;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/challenges'),
    (0, rest_1.response)(200, {
        description: 'Challenge model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, {
                    title: 'NewChallenge',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/challenges/count'),
    (0, rest_1.response)(200, {
        description: 'Challenge model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Challenge)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/challenges'),
    (0, rest_1.response)(200, {
        description: 'Array of Challenge model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Challenge)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/challenges'),
    (0, rest_1.response)(200, {
        description: 'Challenge PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Challenge)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Challenge, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/challenges/{id}'),
    (0, rest_1.response)(200, {
        description: 'Challenge model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Challenge, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/classement-challenges/{challengeId}'),
    (0, rest_1.response)(200, {
        description: 'Classement des challenges',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('challengeId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "getClassement", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/challenges/{id}'),
    (0, rest_1.response)(204, {
        description: 'Challenge PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Challenge]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/challenges/{id}'),
    (0, rest_1.response)(204, {
        description: 'Challenge PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Challenge]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/challenges/{id}'),
    (0, rest_1.response)(204, {
        description: 'Challenge DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detail-classement-challenges/{challengeId}/{ambassadorId}'),
    (0, rest_1.response)(200, {
        description: 'Challenge model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('challengeId')),
    tslib_1.__param(1, rest_1.param.path.string('ambassadorId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeController.prototype, "getClassements", null);
ChallengeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ChallengeRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.SouscriptionRepository)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.DatahistoryRepository)),
    tslib_1.__param(3, (0, repository_1.repository)(repositories_1.AmbassadorRepository)),
    tslib_1.__param(4, (0, core_1.inject)('controllers.ApiManagementController')),
    tslib_1.__param(5, (0, repository_1.repository)(repositories_1.ZoningRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ChallengeRepository,
        repositories_1.SouscriptionRepository,
        repositories_1.DatahistoryRepository,
        repositories_1.AmbassadorRepository,
        api_management_controller_1.ApiManagementController,
        repositories_1.ZoningRepository])
], ChallengeController);
exports.ChallengeController = ChallengeController;
//# sourceMappingURL=challenge.controller.js.map