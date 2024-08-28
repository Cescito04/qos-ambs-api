"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeZoningController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ChallengeZoningController = class ChallengeZoningController {
    constructor(challengeRepository) {
        this.challengeRepository = challengeRepository;
    }
    async get(id, filter) {
        return this.challengeRepository.zoning(id).get(filter);
    }
    async create(id, zoning) {
        return this.challengeRepository.zoning(id).create(zoning);
    }
    async patch(id, zoning, where) {
        return this.challengeRepository.zoning(id).patch(zoning, where);
    }
    async delete(id, where) {
        return this.challengeRepository.zoning(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/challenges/{id}/zoning', {
        responses: {
            '200': {
                description: 'Challenge has one Zoning',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning),
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
], ChallengeZoningController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/challenges/{id}/zoning', {
        responses: {
            '200': {
                description: 'Challenge model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning, {
                    title: 'NewZoningInChallenge',
                    exclude: ['id'],
                    optional: ['challengeId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeZoningController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/challenges/{id}/zoning', {
        responses: {
            '200': {
                description: 'Challenge.Zoning PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Zoning, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Zoning))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeZoningController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/challenges/{id}/zoning', {
        responses: {
            '200': {
                description: 'Challenge.Zoning DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Zoning))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeZoningController.prototype, "delete", null);
ChallengeZoningController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ChallengeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ChallengeRepository])
], ChallengeZoningController);
exports.ChallengeZoningController = ChallengeZoningController;
//# sourceMappingURL=challenge-zoning.controller.js.map