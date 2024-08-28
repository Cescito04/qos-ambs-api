"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeSouscriptionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ChallengeSouscriptionController = class ChallengeSouscriptionController {
    constructor(challengeRepository) {
        this.challengeRepository = challengeRepository;
    }
    async find(id, filter) {
        return this.challengeRepository.souscriptions(id).find(filter);
    }
    async create(id, souscription) {
        return this.challengeRepository.souscriptions(id).create(souscription);
    }
    async patch(id, souscription, where) {
        return this.challengeRepository.souscriptions(id).patch(souscription, where);
    }
    async delete(id, where) {
        return this.challengeRepository.souscriptions(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/challenges/{id}/souscriptions', {
        responses: {
            '200': {
                description: 'Array of Challenge has many Souscription',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Souscription) },
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
], ChallengeSouscriptionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/challenges/{id}/souscriptions', {
        responses: {
            '200': {
                description: 'Challenge model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription, {
                    title: 'NewSouscriptionInChallenge',
                    exclude: ['id'],
                    optional: ['challengeId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeSouscriptionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/challenges/{id}/souscriptions', {
        responses: {
            '200': {
                description: 'Challenge.Souscription PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Souscription))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeSouscriptionController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/challenges/{id}/souscriptions', {
        responses: {
            '200': {
                description: 'Challenge.Souscription DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Souscription))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ChallengeSouscriptionController.prototype, "delete", null);
ChallengeSouscriptionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ChallengeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ChallengeRepository])
], ChallengeSouscriptionController);
exports.ChallengeSouscriptionController = ChallengeSouscriptionController;
//# sourceMappingURL=challenge-souscription.controller.js.map