"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesChallengeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PropertiesChallengeController = class PropertiesChallengeController {
    constructor(propertiesRepository) {
        this.propertiesRepository = propertiesRepository;
    }
    async getChallenge(id) {
        return this.propertiesRepository.challenge(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/properties/{id}/challenge', {
        responses: {
            '200': {
                description: 'Challenge belonging to Properties',
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
], PropertiesChallengeController.prototype, "getChallenge", null);
PropertiesChallengeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PropertiesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PropertiesRepository])
], PropertiesChallengeController);
exports.PropertiesChallengeController = PropertiesChallengeController;
//# sourceMappingURL=properties-challenge.controller.js.map