"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SouscriptionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SouscriptionController = class SouscriptionController {
    constructor(souscriptionRepository) {
        this.souscriptionRepository = souscriptionRepository;
    }
    async create(souscription) {
        return this.souscriptionRepository.create(souscription);
    }
    async count(where) {
        return this.souscriptionRepository.count(where);
    }
    async find(filter) {
        return this.souscriptionRepository.find(filter);
    }
    async updateAll(souscription, where) {
        return this.souscriptionRepository.updateAll(souscription, where);
    }
    async findById(id, filter) {
        return this.souscriptionRepository.findById(id, filter);
    }
    async updateById(id, souscription) {
        await this.souscriptionRepository.updateById(id, souscription);
    }
    async replaceById(id, souscription) {
        await this.souscriptionRepository.replaceById(id, souscription);
    }
    async deleteById(id) {
        await this.souscriptionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/souscriptions'),
    (0, rest_1.response)(200, {
        description: 'Souscription model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription, {
                    title: 'NewSouscription',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/souscriptions/count'),
    (0, rest_1.response)(200, {
        description: 'Souscription model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Souscription)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/souscriptions'),
    (0, rest_1.response)(200, {
        description: 'Array of Souscription model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Souscription, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Souscription)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/souscriptions'),
    (0, rest_1.response)(200, {
        description: 'Souscription PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Souscription)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Souscription, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/souscriptions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Souscription model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Souscription, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/souscriptions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Souscription PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Souscription, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Souscription]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/souscriptions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Souscription PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Souscription]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/souscriptions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Souscription DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SouscriptionController.prototype, "deleteById", null);
SouscriptionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SouscriptionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SouscriptionRepository])
], SouscriptionController);
exports.SouscriptionController = SouscriptionController;
//# sourceMappingURL=souscription.controller.js.map