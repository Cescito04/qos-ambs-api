"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeBonCoinController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LeBonCoinController = class LeBonCoinController {
    constructor(leBonCoinRepository) {
        this.leBonCoinRepository = leBonCoinRepository;
    }
    async create(leBonCoin) {
        return this.leBonCoinRepository.create(leBonCoin);
    }
    async count(where) {
        return this.leBonCoinRepository.count(where);
    }
    async find(filter) {
        return this.leBonCoinRepository.find(filter);
    }
    async updateAll(leBonCoin, where) {
        return this.leBonCoinRepository.updateAll(leBonCoin, where);
    }
    async findById(id, filter) {
        return this.leBonCoinRepository.findById(id, filter);
    }
    async updateById(id, leBonCoin) {
        await this.leBonCoinRepository.updateById(id, leBonCoin);
    }
    async replaceById(id, leBonCoin) {
        await this.leBonCoinRepository.replaceById(id, leBonCoin);
    }
    async deleteById(id) {
        await this.leBonCoinRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/le-bon-coins'),
    (0, rest_1.response)(200, {
        description: 'LeBonCoin model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin, {
                    title: 'NewLeBonCoin',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/le-bon-coins/count'),
    (0, rest_1.response)(200, {
        description: 'LeBonCoin model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.LeBonCoin)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/le-bon-coins'),
    (0, rest_1.response)(200, {
        description: 'Array of LeBonCoin model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.LeBonCoin)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/le-bon-coins'),
    (0, rest_1.response)(200, {
        description: 'LeBonCoin PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.LeBonCoin)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.LeBonCoin, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/le-bon-coins/{id}'),
    (0, rest_1.response)(200, {
        description: 'LeBonCoin model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.LeBonCoin, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/le-bon-coins/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeBonCoin PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.LeBonCoin]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/le-bon-coins/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeBonCoin PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.LeBonCoin]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/le-bon-coins/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeBonCoin DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LeBonCoinController.prototype, "deleteById", null);
LeBonCoinController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.LeBonCoinRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LeBonCoinRepository])
], LeBonCoinController);
exports.LeBonCoinController = LeBonCoinController;
//# sourceMappingURL=le-bon-coin.controller.js.map