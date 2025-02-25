"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SouscriptionClassementController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SouscriptionClassementController = class SouscriptionClassementController {
    constructor(souscriptionRepository) {
        this.souscriptionRepository = souscriptionRepository;
    }
    async find(id, filter) {
        return this.souscriptionRepository.classements(id).find(filter);
    }
    async create(id, classement) {
        return this.souscriptionRepository.classements(id).create(classement);
    }
    async patch(id, classement, where) {
        return this.souscriptionRepository.classements(id).patch(classement, where);
    }
    async delete(id, where) {
        return this.souscriptionRepository.classements(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/souscriptions/{id}/classements', {
        responses: {
            '200': {
                description: 'Array of Souscription has many Classement',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Classement) },
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
], SouscriptionClassementController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/souscriptions/{id}/classements', {
        responses: {
            '200': {
                description: 'Souscription model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Classement) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classement, {
                    title: 'NewClassementInSouscription',
                    exclude: ['id'],
                    optional: ['souscriptionId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionClassementController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/souscriptions/{id}/classements', {
        responses: {
            '200': {
                description: 'Souscription.Classement PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Classement, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Classement))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionClassementController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/souscriptions/{id}/classements', {
        responses: {
            '200': {
                description: 'Souscription.Classement DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Classement))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionClassementController.prototype, "delete", null);
SouscriptionClassementController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SouscriptionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SouscriptionRepository])
], SouscriptionClassementController);
exports.SouscriptionClassementController = SouscriptionClassementController;
//# sourceMappingURL=souscription-classement.controller.js.map