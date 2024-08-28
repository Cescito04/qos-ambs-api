"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbassadorLeBonCoinController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AmbassadorLeBonCoinController = class AmbassadorLeBonCoinController {
    constructor(ambassadorRepository) {
        this.ambassadorRepository = ambassadorRepository;
    }
    async get(id, filter) {
        return this.ambassadorRepository.leBonCoin(id).get(filter);
    }
    async create(id, leBonCoin) {
        return this.ambassadorRepository.leBonCoin(id).create(leBonCoin);
    }
    async patch(id, leBonCoin, where) {
        return this.ambassadorRepository.leBonCoin(id).patch(leBonCoin, where);
    }
    async delete(id, where) {
        return this.ambassadorRepository.leBonCoin(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/ambassadors/{id}/le-bon-coin', {
        responses: {
            '200': {
                description: 'Ambassador has one LeBonCoin',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin),
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
], AmbassadorLeBonCoinController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/ambassadors/{id}/le-bon-coin', {
        responses: {
            '200': {
                description: 'Ambassador model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin, {
                    title: 'NewLeBonCoinInAmbassador',
                    exclude: ['id'],
                    optional: ['ambassadorId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorLeBonCoinController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ambassadors/{id}/le-bon-coin', {
        responses: {
            '200': {
                description: 'Ambassador.LeBonCoin PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeBonCoin, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.LeBonCoin))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorLeBonCoinController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ambassadors/{id}/le-bon-coin', {
        responses: {
            '200': {
                description: 'Ambassador.LeBonCoin DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.LeBonCoin))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorLeBonCoinController.prototype, "delete", null);
AmbassadorLeBonCoinController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AmbassadorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AmbassadorRepository])
], AmbassadorLeBonCoinController);
exports.AmbassadorLeBonCoinController = AmbassadorLeBonCoinController;
//# sourceMappingURL=ambassador-le-bon-coin.controller.js.map