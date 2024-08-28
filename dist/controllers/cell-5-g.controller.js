"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell5GController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Cell5GController = class Cell5GController {
    constructor(cell5GRepository) {
        this.cell5GRepository = cell5GRepository;
    }
    async create(cell5G) {
        return this.cell5GRepository.create(cell5G);
    }
    async getSites5Gs(band) {
        let cell5Gs = await this.cell5GRepository.find();
        let sites = [];
        cell5Gs.forEach(cell => {
            let site = sites.find(s => s.nomSite == cell.nomSite);
            if (site) {
                site.cells.push({ nomCellule: cell.nomCellule });
            }
            else {
                sites.push({ nomSite: cell.nomSite, latitude: cell.latitude, longitude: cell.longitude, band: cell.band, cells: [] });
            }
        });
        if (band == 0)
            return sites;
        else
            return sites.filter(s => s.band === band);
    }
    async count(where) {
        return this.cell5GRepository.count(where);
    }
    async find(filter) {
        return this.cell5GRepository.find(filter);
    }
    async updateAll(cell5G, where) {
        return this.cell5GRepository.updateAll(cell5G, where);
    }
    async findById(id, filter) {
        return this.cell5GRepository.findById(id, filter);
    }
    async updateById(id, cell5G) {
        await this.cell5GRepository.updateById(id, cell5G);
    }
    async replaceById(id, cell5G) {
        await this.cell5GRepository.replaceById(id, cell5G);
    }
    async deleteById(id) {
        await this.cell5GRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/cell5gs'),
    (0, rest_1.response)(200, {
        description: 'Cell5G model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cell5G) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell5G, {
                    title: 'NewCell5G',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sites5gs/{band}'),
    (0, rest_1.response)(200, {
        description: 'Array of 5G sites model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array'
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('band')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "getSites5Gs", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell5gs/count'),
    (0, rest_1.response)(200, {
        description: 'Cell5G model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cell5G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell5gs'),
    (0, rest_1.response)(200, {
        description: 'Array of Cell5G model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cell5G, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cell5G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell5gs'),
    (0, rest_1.response)(200, {
        description: 'Cell5G PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell5G, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cell5G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cell5G, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell5gs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cell5G model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell5G, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cell5G, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell5gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell5G PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell5G, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell5G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cell5gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell5G PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell5G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cell5gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell5G DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell5GController.prototype, "deleteById", null);
Cell5GController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.Cell5GRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Cell5GRepository])
], Cell5GController);
exports.Cell5GController = Cell5GController;
//# sourceMappingURL=cell-5-g.controller.js.map