"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PropertiesController = class PropertiesController {
    constructor(propertiesRepository) {
        this.propertiesRepository = propertiesRepository;
    }
    async create(properties) {
        return this.propertiesRepository.create(properties);
    }
    async count(where) {
        return this.propertiesRepository.count(where);
    }
    async find(filter) {
        return this.propertiesRepository.find(filter);
    }
    async updateAll(properties, where) {
        return this.propertiesRepository.updateAll(properties, where);
    }
    async findById(id, filter) {
        return this.propertiesRepository.findById(id, filter);
    }
    async updateById(id, properties) {
        await this.propertiesRepository.updateById(id, properties);
    }
    async replaceById(id, properties) {
        await this.propertiesRepository.replaceById(id, properties);
    }
    async deleteById(id) {
        await this.propertiesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/properties'),
    (0, rest_1.response)(200, {
        description: 'Properties model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Properties) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Properties, {
                    title: 'NewProperties',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/properties/count'),
    (0, rest_1.response)(200, {
        description: 'Properties model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Properties)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/properties'),
    (0, rest_1.response)(200, {
        description: 'Array of Properties model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Properties, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Properties)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/properties'),
    (0, rest_1.response)(200, {
        description: 'Properties PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Properties, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Properties)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Properties, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/properties/{id}'),
    (0, rest_1.response)(200, {
        description: 'Properties model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Properties, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Properties, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/properties/{id}'),
    (0, rest_1.response)(204, {
        description: 'Properties PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Properties, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Properties]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/properties/{id}'),
    (0, rest_1.response)(204, {
        description: 'Properties PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Properties]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/properties/{id}'),
    (0, rest_1.response)(204, {
        description: 'Properties DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesController.prototype, "deleteById", null);
PropertiesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PropertiesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PropertiesRepository])
], PropertiesController);
exports.PropertiesController = PropertiesController;
//# sourceMappingURL=properties.controller.js.map