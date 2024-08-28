"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHistoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DataHistoryController = class DataHistoryController {
    constructor(datahistoryRepository, ambassadorRepository) {
        this.datahistoryRepository = datahistoryRepository;
        this.ambassadorRepository = ambassadorRepository;
    }
    async create(datahistory) {
        return this.datahistoryRepository.create(datahistory);
    }
    async count(where) {
        return this.datahistoryRepository.count(where);
    }
    async find(filter) {
        return this.datahistoryRepository.find(filter);
    }
    async updateAll(datahistory, where) {
        return this.datahistoryRepository.updateAll(datahistory, where);
    }
    async findById(id, filter) {
        return this.datahistoryRepository.findById(id, filter);
    }
    async updateById(id, datahistory) {
        await this.datahistoryRepository.updateById(id, datahistory);
    }
    async replaceById(id, datahistory) {
        await this.datahistoryRepository.replaceById(id, datahistory);
    }
    async deleteById(id) {
        await this.datahistoryRepository.deleteById(id);
    }
    async getAverageSpeed(ambassadorId, technology) {
        const ambassador = await this.ambassadorRepository.findById(ambassadorId);
        if (!ambassador) {
            throw new Error('Ambassador not found');
        }
        const datahistories = await this.datahistoryRepository.find({
            where: { ambassadorId, techno: technology },
        });
        if (datahistories.length === 0) {
            throw new Error(`No data histories found for technology ${technology}`);
        }
        let dlSum = 0;
        let ulSum = 0;
        let count = 0;
        datahistories.forEach(dh => {
            dlSum += dh.download;
            ulSum += dh.upload;
            count++;
        });
        let dlAvg = dlSum / count || 0;
        let ulAvg = ulSum / count || 0;
        let debit = (dlAvg + ulAvg) / 2;
        debit = parseFloat(debit.toFixed(2));
        dlAvg = parseFloat(dlAvg.toFixed(2));
        ulAvg = parseFloat(ulAvg.toFixed(2));
        const responseObj = {
            nom: ambassador.nom,
            prenom: ambassador.prenom,
            technologies: {
                moydl: dlAvg,
                moyUl: ulAvg,
                debitMoy: debit,
                testCount: count,
            },
        };
        return responseObj;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/datahistories'),
    (0, rest_1.response)(200, {
        description: 'Datahistory model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory, {
                    title: 'NewDatahistory',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/datahistories/count'),
    (0, rest_1.response)(200, {
        description: 'Datahistory model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Datahistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/datahistories'),
    (0, rest_1.response)(200, {
        description: 'Array of Datahistory model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Datahistory, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Datahistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/datahistories'),
    (0, rest_1.response)(200, {
        description: 'Datahistory PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Datahistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Datahistory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/datahistories/{id}'),
    (0, rest_1.response)(200, {
        description: 'Datahistory model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Datahistory, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/datahistories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Datahistory PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Datahistory]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/datahistories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Datahistory PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Datahistory]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/datahistories/{id}'),
    (0, rest_1.response)(204, {
        description: 'Datahistory DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/datahistories/debit-moyen/{ambassadorId}/{technology}'),
    (0, rest_1.response)(200, {
        description: 'Average download and upload speed for a given ambassador by technology',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        nom: { type: 'string' },
                        prenom: { type: 'string' },
                        technologies: {
                            type: 'object',
                            properties: {
                                dlAvg: { type: 'number' },
                                ulAvg: { type: 'number' },
                                debit: { type: 'number' },
                                testCount: { type: 'number' },
                            },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('ambassadorId')),
    tslib_1.__param(1, rest_1.param.path.string('technology')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], DataHistoryController.prototype, "getAverageSpeed", null);
DataHistoryController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.DatahistoryRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.AmbassadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DatahistoryRepository,
        repositories_1.AmbassadorRepository])
], DataHistoryController);
exports.DataHistoryController = DataHistoryController;
//# sourceMappingURL=data-history.controller.js.map