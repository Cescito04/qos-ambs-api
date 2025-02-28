"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell3GController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Cell3GController = class Cell3GController {
    constructor(cell3GRepository) {
        this.cell3GRepository = cell3GRepository;
    }
    async create(cell3G) {
        return this.cell3GRepository.create(cell3G);
    }
    async count(where) {
        return this.cell3GRepository.count(where);
    }
    async find(filter) {
        return this.cell3GRepository.find(filter);
    }
    async updateAll(cell3G, where) {
        return this.cell3GRepository.updateAll(cell3G, where);
    }
    async findById(id, filter) {
        return this.cell3GRepository.findById(id, filter);
    }
    async updateById(id, cell3G) {
        await this.cell3GRepository.updateById(id, cell3G);
    }
    async replaceById(id, cell3G) {
        await this.cell3GRepository.replaceById(id, cell3G);
    }
    async deleteById(id) {
        await this.cell3GRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/cell3gs'),
    (0, rest_1.response)(200, {
        description: 'Cell3G model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cell3G) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell3G, {
                    title: 'NewCell3G',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell3gs/count'),
    (0, rest_1.response)(200, {
        description: 'Cell3G model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cell3G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell3gs'),
    (0, rest_1.response)(200, {
        description: 'Array of Cell3G model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cell3G, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cell3G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell3gs'),
    (0, rest_1.response)(200, {
        description: 'Cell3G PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell3G, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cell3G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cell3G, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell3gs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cell3G model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell3G, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cell3G, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell3gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell3G PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell3G, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell3G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cell3gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell3G PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell3G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cell3gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell3G DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell3GController.prototype, "deleteById", null);
Cell3GController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.Cell3GRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Cell3GRepository])
], Cell3GController);
exports.Cell3GController = Cell3GController;
//# sourceMappingURL=cell-3-g.controller.js.map