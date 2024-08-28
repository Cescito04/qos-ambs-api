"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SouscriptionChallengeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SouscriptionChallengeController = class SouscriptionChallengeController {
    constructor(souscriptionRepository) {
        this.souscriptionRepository = souscriptionRepository;
    }
    async getChallenge(id) {
        return this.souscriptionRepository.challenge(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/souscriptions/{id}/challenge', {
        responses: {
            '200': {
                description: 'Challenge belonging to Souscription',
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
], SouscriptionChallengeController.prototype, "getChallenge", null);
SouscriptionChallengeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SouscriptionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SouscriptionRepository])
], SouscriptionChallengeController);
exports.SouscriptionChallengeController = SouscriptionChallengeController;
//# sourceMappingURL=souscription-challenge.controller.js.map