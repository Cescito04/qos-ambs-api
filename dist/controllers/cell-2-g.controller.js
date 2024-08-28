"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell2GController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Cell2GController = class Cell2GController {
    constructor(cell2GRepository) {
        this.cell2GRepository = cell2GRepository;
    }
    async create(cell2G) {
        return this.cell2GRepository.create(cell2G);
    }
    async count(where) {
        return this.cell2GRepository.count(where);
    }
    async find(filter) {
        return this.cell2GRepository.find(filter);
    }
    /*  @get('/sites2gs')
     @response(200, {
       description: 'Array of 2G sites model instances',
       content: {
         'application/json': {
           schema: {
             type: 'array'
           },
         },
       },
     })
     async getSites2Gs(
     ): Promise<any[]> {
       let cell2Gs = await this.cell2GRepository.find();
       let sites: any[] = [];
       cell2Gs.forEach(cell => {
         let site = sites.find(s => s.nomSite == cell.nomSite)
         if (site) {
           site.cells.push({nomCellule: cell.nomCellule})
         } else {
           sites.push({nomSite: cell.nomSite,latitude: cell.latitude, longitude: cell.longitude, cells:[]})
         }
       });
       return sites
     }
    */
    async updateAll(cell2G, where) {
        return this.cell2GRepository.updateAll(cell2G, where);
    }
    async findById(id, filter) {
        return this.cell2GRepository.findById(id, filter);
    }
    async updateById(id, cell2G) {
        await this.cell2GRepository.updateById(id, cell2G);
    }
    async replaceById(id, cell2G) {
        await this.cell2GRepository.replaceById(id, cell2G);
    }
    async deleteById(id) {
        await this.cell2GRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/cell2gs'),
    (0, rest_1.response)(200, {
        description: 'Cell2G model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cell2G) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell2G, {
                    title: 'NewCell2G',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell2gs/count'),
    (0, rest_1.response)(200, {
        description: 'Cell2G model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cell2G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell2gs'),
    (0, rest_1.response)(200, {
        description: 'Array of Cell2G model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cell2G, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cell2G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell2gs'),
    (0, rest_1.response)(200, {
        description: 'Cell2G PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell2G, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cell2G)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cell2G, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cell2gs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cell2G model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell2G, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cell2G, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cell2gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell2G PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cell2G, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell2G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cell2gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell2G PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cell2G]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cell2gs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cell2G DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Cell2GController.prototype, "deleteById", null);
Cell2GController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.Cell2GRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Cell2GRepository])
], Cell2GController);
exports.Cell2GController = Cell2GController;
//# sourceMappingURL=cell-2-g.controller.js.map