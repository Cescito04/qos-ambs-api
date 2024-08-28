"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesValuesSouscriptionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PropertiesValuesSouscriptionController = class PropertiesValuesSouscriptionController {
    constructor(propertiesValuesRepository) {
        this.propertiesValuesRepository = propertiesValuesRepository;
    }
    async getSouscription(id) {
        return this.propertiesValuesRepository.souscription(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/properties-values/{id}/souscription', {
        responses: {
            '200': {
                description: 'Souscription belonging to PropertiesValues',
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
], PropertiesValuesSouscriptionController.prototype, "getSouscription", null);
PropertiesValuesSouscriptionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PropertiesValuesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PropertiesValuesRepository])
], PropertiesValuesSouscriptionController);
exports.PropertiesValuesSouscriptionController = PropertiesValuesSouscriptionController;
//# sourceMappingURL=properties-values-souscription.controller.js.map