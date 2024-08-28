"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassementSouscriptionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClassementSouscriptionController = class ClassementSouscriptionController {
    constructor(classementRepository) {
        this.classementRepository = classementRepository;
    }
    async getSouscription(id) {
        return this.classementRepository.souscription(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/classements/{id}/souscription', {
        responses: {
            '200': {
                description: 'Souscription belonging to Classement',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassementSouscriptionController.prototype, "getSouscription", null);
ClassementSouscriptionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClassementRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClassementRepository])
], ClassementSouscriptionController);
exports.ClassementSouscriptionController = ClassementSouscriptionController;
//# sourceMappingURL=classement-souscription.controller.js.map