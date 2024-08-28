"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SouscriptionAmbassadorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SouscriptionAmbassadorController = class SouscriptionAmbassadorController {
    constructor(souscriptionRepository) {
        this.souscriptionRepository = souscriptionRepository;
    }
    async getAmbassador(id) {
        return this.souscriptionRepository.ambassador(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/souscriptions/{id}/ambassador', {
        responses: {
            '200': {
                description: 'Ambassador belonging to Souscription',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Ambassador),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionAmbassadorController.prototype, "getAmbassador", null);
SouscriptionAmbassadorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SouscriptionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SouscriptionRepository])
], SouscriptionAmbassadorController);
exports.SouscriptionAmbassadorController = SouscriptionAmbassadorController;
//# sourceMappingURL=souscription-ambassador.controller.js.map