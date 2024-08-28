"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoningController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ZoningController = class ZoningController {
    constructor(zoningRepository) {
        this.zoningRepository = zoningRepository;
    }
    async create(zoning) {
        return this.zoningRepository.create(zoning);
    }
    async count(where) {
        return this.zoningRepository.count(where);
    }
    async find(filter) {
        return this.zoningRepository.find(filter);
    }
    async updateAll(zoning, where) {
        return this.zoningRepository.updateAll(zoning, where);
    }
    async findById(id, filter) {
        return this.zoningRepository.findById(id, filter);
    }
    async updateById(id, zoning) {
        await this.zoningRepository.updateById(id, zoning);
    }
    async replaceById(id, zoning) {
        await this.zoningRepository.replaceById(id, zoning);
    }
    async deleteById(id) {
        await this.zoningRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/zonings'),
    (0, rest_1.response)(200, {
        description: 'Zoning model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning, {
                    title: 'NewZoning',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/zonings/count'),
    (0, rest_1.response)(200, {
        description: 'Zoning model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Zoning)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/zonings'),
    (0, rest_1.response)(200, {
        description: 'Array of Zoning model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Zoning, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Zoning)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/zonings'),
    (0, rest_1.response)(200, {
        description: 'Zoning PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Zoning)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Zoning, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/zonings/{id}'),
    (0, rest_1.response)(200, {
        description: 'Zoning model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Zoning, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/zonings/{id}'),
    (0, rest_1.response)(204, {
        description: 'Zoning PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Zoning]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/zonings/{id}'),
    (0, rest_1.response)(204, {
        description: 'Zoning PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Zoning]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/zonings/{id}'),
    (0, rest_1.response)(204, {
        description: 'Zoning DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningController.prototype, "deleteById", null);
ZoningController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ZoningRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ZoningRepository])
], ZoningController);
exports.ZoningController = ZoningController;
//# sourceMappingURL=zoning.controller.js.map