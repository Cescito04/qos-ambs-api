"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassementController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClassementController = class ClassementController {
    constructor(classementRepository) {
        this.classementRepository = classementRepository;
    }
    async create(classement) {
        return this.classementRepository.create(classement);
    }
    async count(where) {
        return this.classementRepository.count(where);
    }
    async find(filter) {
        return this.classementRepository.find(filter);
    }
    async updateAll(classement, where) {
        return this.classementRepository.updateAll(classement, where);
    }
    async findById(id, filter) {
        return this.classementRepository.findById(id, filter);
    }
    async updateById(id, classement) {
        await this.classementRepository.updateById(id, classement);
    }
    async replaceById(id, classement) {
        await this.classementRepository.replaceById(id, classement);
    }
    async deleteById(id) {
        await this.classementRepository.deleteById(id);
    }
    /* @get('/classements/calculate-scores')
    @response(200, {
      description: 'Calcul des scores pour les classements',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: getModelSchemaRef(Classement, {includeRelations: true}),
          },
        },
      },
    })
    async calculateScores(): Promise<any[]> {
      const filter = {
        include: [
          {
            relation: 'challenge', // Inclure la relation challenge
          },
          {
            relation: 'souscription',
            scope: {
              include: [
                {
                  relation: 'ambassador',
                  scope: {
                    include: ['datahistories'],
                  },
                },
              ],
            },
          },
        ],
      };
  
      const classements = await this.classementRepository.find(filter);
  
      const results = classements.map(classement => {
        const challenge = classement.challenge;
        const subscribe = classement.souscription;
  
        // Vérifier si le challenge a la technologie et les dates spécifiées
        if (challenge?.techno && challenge.date_debut && challenge.date_fin) {
          const techno = challenge.techno;
          const startDate = new Date(subscribe.date);
          // const startDate = new Date(challenge.date_debut);
          const endDate = new Date(challenge.date_fin);
  
          const datahistories = classement.souscription?.ambassador?.datahistories || [];
  
          // Filtrer les datahistories par technologie et par dates
          const filteredDatahistories = datahistories.filter((dh: {techno: string; date: string;}) => {
            const isTechnoMatch = dh.techno === techno;
            const isDateMatch = new Date(dh.date) >= startDate && new Date(dh.date) <= endDate;
            return isTechnoMatch && isDateMatch;
          });
  
          //  console.log(`Datahistories filtrés pour la techno ${techno}:`, filteredDatahistories);
  
          const dlValues = filteredDatahistories.map((dh: {download: any;}) => dh.download);
          const ulValues = filteredDatahistories.map((dh: {upload: any;}) => dh.upload);
  
  
          const dlAvg = this.calculateAverage(dlValues);
          const ulAvg = this.calculateAverage(ulValues);
          const numTests = filteredDatahistories.length;
  
  
          const score = Math.round(((dlAvg * 0.7) + (ulAvg * 0.3)) * numTests);
          // console.log(`Score pour le classement ${classement.id}: ${score}`);
  
          return {...classement.toJSON(), score};
        }
  
        return {...classement.toJSON(), score: 404}; // Retourner un score de 0 si les informations du challenge sont manquantes
      });
  
      return results;
    } */
    // Fonction utilitaire pour calculer la moyenne
    calculateAverage(values) {
        if (values.length === 0)
            return 0;
        const sum = values.reduce((acc, value) => acc + value, 0);
        return sum / values.length;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/classements'),
    (0, rest_1.response)(200, {
        description: 'Classement model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Classement) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classement, {
                    title: 'NewClassement',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/classements/count'),
    (0, rest_1.response)(200, {
        description: 'Classement model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Classement)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/classements'),
    (0, rest_1.response)(200, {
        description: 'Array of Classement model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Classement, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Classement)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/classements'),
    (0, rest_1.response)(200, {
        description: 'Classement PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classement, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Classement)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Classement, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/classements/{id}'),
    (0, rest_1.response)(200, {
        description: 'Classement model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classement, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Classement, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/classements/{id}'),
    (0, rest_1.response)(204, {
        description: 'Classement PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classement, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Classement]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/classements/{id}'),
    (0, rest_1.response)(204, {
        description: 'Classement PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Classement]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/classements/{id}'),
    (0, rest_1.response)(204, {
        description: 'Classement DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementController.prototype, "deleteById", null);
ClassementController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClassementRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClassementRepository])
], ClassementController);
exports.ClassementController = ClassementController;
//# sourceMappingURL=classement.controller.js.map