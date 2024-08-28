"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SouscriptionPropertiesValuesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SouscriptionPropertiesValuesController = class SouscriptionPropertiesValuesController {
    constructor(souscriptionRepository) {
        this.souscriptionRepository = souscriptionRepository;
    }
    async find(id, filter) {
        return this.souscriptionRepository.propertiesValues(id).find(filter);
    }
    async create(id, propertiesValues) {
        return this.souscriptionRepository.propertiesValues(id).create(propertiesValues);
    }
    async patch(id, propertiesValues, where) {
        return this.souscriptionRepository.propertiesValues(id).patch(propertiesValues, where);
    }
    async delete(id, where) {
        return this.souscriptionRepository.propertiesValues(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/souscriptions/{id}/properties-values', {
        responses: {
            '200': {
                description: 'Array of Souscription has many PropertiesValues',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues) },
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
], SouscriptionPropertiesValuesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/souscriptions/{id}/properties-values', {
        responses: {
            '200': {
                description: 'Souscription model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues, {
                    title: 'NewPropertiesValuesInSouscription',
                    exclude: ['id'],
                    optional: ['souscriptionId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionPropertiesValuesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/souscriptions/{id}/properties-values', {
        responses: {
            '200': {
                description: 'Souscription.PropertiesValues PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.PropertiesValues))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionPropertiesValuesController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/souscriptions/{id}/properties-values', {
        responses: {
            '200': {
                description: 'Souscription.PropertiesValues DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.PropertiesValues))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionPropertiesValuesController.prototype, "delete", null);
SouscriptionPropertiesValuesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SouscriptionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SouscriptionRepository])
], SouscriptionPropertiesValuesController);
exports.SouscriptionPropertiesValuesController = SouscriptionPropertiesValuesController;
//# sourceMappingURL=souscription-properties-values.controller.js.map