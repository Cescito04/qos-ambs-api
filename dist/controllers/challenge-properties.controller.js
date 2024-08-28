"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengePropertiesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ChallengePropertiesController = class ChallengePropertiesController {
    constructor(challengeRepository) {
        this.challengeRepository = challengeRepository;
    }
    async find(id, filter) {
        return this.challengeRepository.properties(id).find(filter);
    }
    async create(id, properties) {
        return this.challengeRepository.properties(id).create(properties);
    }
    async patch(id, properties, where) {
        return this.challengeRepository.properties(id).patch(properties, where);
    }
    async delete(id, where) {
        return this.challengeRepository.properties(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/challenges/{id}/properties', {
        responses: {
            '200': {
                description: 'Array of Challenge has many Properties',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Properties) },
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
], ChallengePropertiesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/challenges/{id}/properties', {
        responses: {
            '200': {
                description: 'Challenge model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Properties) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Properties, {
                    title: 'NewPropertiesInChallenge',
                    exclude: ['id'],
                    optional: ['challengeId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengePropertiesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/challenges/{id}/properties', {
        responses: {
            '200': {
                description: 'Challenge.Properties PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Properties, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Properties))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengePropertiesController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/challenges/{id}/properties', {
        responses: {
            '200': {
                description: 'Challenge.Properties DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Properties))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengePropertiesController.prototype, "delete", null);
ChallengePropertiesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ChallengeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ChallengeRepository])
], ChallengePropertiesController);
exports.ChallengePropertiesController = ChallengePropertiesController;
//# sourceMappingURL=challenge-properties.controller.js.map