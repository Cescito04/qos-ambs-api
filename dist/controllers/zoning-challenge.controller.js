"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoningChallengeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ZoningChallengeController = class ZoningChallengeController {
    constructor(zoningRepository) {
        this.zoningRepository = zoningRepository;
    }
    async getChallenge(id) {
        return this.zoningRepository.challenge(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/zonings/{id}/challenge', {
        responses: {
            '200': {
                description: 'Challenge belonging to Zoning',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Challenge),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoningChallengeController.prototype, "getChallenge", null);
ZoningChallengeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ZoningRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ZoningRepository])
], ZoningChallengeController);
exports.ZoningChallengeController = ZoningChallengeController;
//# sourceMappingURL=zoning-challenge.controller.js.map