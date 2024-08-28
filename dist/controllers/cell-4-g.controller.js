"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell4GController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Cell4GController = class Cell4GController {
    constructor(cell4GRepository) {
        this.cell4GRepository = cell4GRepository;
    }
    async create(cell4G) {
        return this.cell4GRepository.create(cell4G);
    }
    async count(where) {
        return this.cell4GRepository.count(where);
    }
    async find(filter) {
        return this.cell4GRepository.find(filter);
    }
    async updateAll(cell4G, where) {
        return this.cell4GRepository.updateAll(cell4G, where);
    }
    async findById(id, filter) {
        return this.cell4GRepository.findById(id, filter);
    }
    async updateById(id, cell4G) {
        await this.cell4GRepository.updateById(id, cell4G);
    }
    async replaceById(id, cell4G) {
        await this.cell4GRepository.replaceById(id, cell4G);
    }
    async deleteById(id) {
        await this.cell4GRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/cell4gs'),
    (0, rest_1.response)(200, {
        description: 'Cell4G model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cell4G) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell4G, {
                    title: 'NewCell4G',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell4gs/count'),
    (0, rest_1.response)(200, {
        description: 'Cell4G model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cell4G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell4gs'),
    (0, rest_1.response)(200, {
        description: 'Array of Cell4G model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cell4G, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cell4G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell4gs'),
    (0, rest_1.response)(200, {
        description: 'Cell4G PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell4G, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cell4G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cell4G, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell4gs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cell4G model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell4G, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cell4G, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell4gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell4G PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell4G, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell4G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cell4gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell4G PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell4G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cell4gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell4G DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell4GController.prototype, "deleteById", null);
Cell4GController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.Cell4GRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Cell4GRepository])
], Cell4GController);
exports.Cell4GController = Cell4GController;
//# sourceMappingURL=cell-4-g.controller.js.map