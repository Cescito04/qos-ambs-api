"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell2GRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let Cell2GRepository = class Cell2GRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Cell2G, dataSource);
    }
};
Cell2GRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource])
], Cell2GRepository);
exports.Cell2GRepository = Cell2GRepository;
//# sourceMappingURL=cell-2-g.repository.js.map