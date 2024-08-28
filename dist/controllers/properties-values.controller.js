"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesValuesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PropertiesValuesController = class PropertiesValuesController {
    constructor(propertiesValuesRepository) {
        this.propertiesValuesRepository = propertiesValuesRepository;
    }
    async create(propertiesValues) {
        return this.propertiesValuesRepository.create(propertiesValues);
    }
    async count(where) {
        return this.propertiesValuesRepository.count(where);
    }
    async find(filter) {
        return this.propertiesValuesRepository.find(filter);
    }
    async updateAll(propertiesValues, where) {
        return this.propertiesValuesRepository.updateAll(propertiesValues, where);
    }
    async findById(id, filter) {
        return this.propertiesValuesRepository.findById(id, filter);
    }
    async updateById(id, propertiesValues) {
        await this.propertiesValuesRepository.updateById(id, propertiesValues);
    }
    async replaceById(id, propertiesValues) {
        await this.propertiesValuesRepository.replaceById(id, propertiesValues);
    }
    async deleteById(id) {
        await this.propertiesValuesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/properties-values'),
    (0, rest_1.response)(200, {
        description: 'PropertiesValues model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues, {
                    title: 'NewPropertiesValues',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/properties-values/count'),
    (0, rest_1.response)(200, {
        description: 'PropertiesValues model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PropertiesValues)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/properties-values'),
    (0, rest_1.response)(200, {
        description: 'Array of PropertiesValues model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PropertiesValues)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/properties-values'),
    (0, rest_1.response)(200, {
        description: 'PropertiesValues PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PropertiesValues)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PropertiesValues, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/properties-values/{id}'),
    (0, rest_1.response)(200, {
        description: 'PropertiesValues model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PropertiesValues, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/properties-values/{id}'),
    (0, rest_1.response)(204, {
        description: 'PropertiesValues PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.PropertiesValues, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.PropertiesValues]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/properties-values/{id}'),
    (0, rest_1.response)(204, {
        description: 'PropertiesValues PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.PropertiesValues]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/properties-values/{id}'),
    (0, rest_1.response)(204, {
        description: 'PropertiesValues DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesController.prototype, "deleteById", null);
PropertiesValuesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PropertiesValuesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PropertiesValuesRepository])
], PropertiesValuesController);
exports.PropertiesValuesController = PropertiesValuesController;
//# sourceMappingURL=properties-values.controller.js.map