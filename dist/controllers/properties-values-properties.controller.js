"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesValuesPropertiesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PropertiesValuesPropertiesController = class PropertiesValuesPropertiesController {
    constructor(propertiesValuesRepository) {
        this.propertiesValuesRepository = propertiesValuesRepository;
    }
    async getProperties(id) {
        return this.propertiesValuesRepository.properties(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/properties-values/{id}/properties', {
        responses: {
            '200': {
                description: 'Properties belonging to PropertiesValues',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Properties),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PropertiesValuesPropertiesController.prototype, "getProperties", null);
PropertiesValuesPropertiesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PropertiesValuesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PropertiesValuesRepository])
], PropertiesValuesPropertiesController);
exports.PropertiesValuesPropertiesController = PropertiesValuesPropertiesController;
//# sourceMappingURL=properties-values-properties.controller.js.map