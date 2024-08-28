"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell5GRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let Cell5GRepository = class Cell5GRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Cell5G, dataSource);
    }
};
Cell5GRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource])
], Cell5GRepository);
exports.Cell5GRepository = Cell5GRepository;
//# sourceMappingURL=cell-5-g.repository.js.map