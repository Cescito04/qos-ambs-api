"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbassadorDatahistoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AmbassadorDatahistoryController = class AmbassadorDatahistoryController {
    constructor(ambassadorRepository) {
        this.ambassadorRepository = ambassadorRepository;
    }
    async find(id, filter) {
        return this.ambassadorRepository.datahistories(id).find(filter);
    }
    async create(id, datahistory) {
        return this.ambassadorRepository.datahistories(id).create(datahistory);
    }
    async patch(id, datahistory, where) {
        return this.ambassadorRepository.datahistories(id).patch(datahistory, where);
    }
    async delete(id, where) {
        return this.ambassadorRepository.datahistories(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/ambassadors/{id}/datahistories', {
        responses: {
            '200': {
                description: 'Array of Ambassador has many Datahistory',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Datahistory) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorDatahistoryController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/ambassadors/{id}/datahistories', {
        responses: {
            '200': {
                description: 'Ambassador model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory, {
                    title: 'NewDatahistoryInAmbassador',
                    exclude: ['id'],
                    optional: ['ambassadorId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorDatahistoryController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ambassadors/{id}/datahistories', {
        responses: {
            '200': {
                description: 'Ambassador.Datahistory PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Datahistory, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Datahistory))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorDatahistoryController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ambassadors/{id}/datahistories', {
        responses: {
            '200': {
                description: 'Ambassador.Datahistory DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Datahistory))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorDatahistoryController.prototype, "delete", null);
AmbassadorDatahistoryController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AmbassadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AmbassadorRepository])
], AmbassadorDatahistoryController);
exports.AmbassadorDatahistoryController = AmbassadorDatahistoryController;
//# sourceMappingURL=ambassador-datahistory.controller.js.map