"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoningRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ZoningRepository = class ZoningRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, challengeRepositoryGetter) {
        super(models_1.Zoning, dataSource);
        this.challengeRepositoryGetter = challengeRepositoryGetter;
        this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter);
        this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
    }
};
ZoningRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__param(1, repository_1.repository.getter('ChallengeRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource, Function])
], ZoningRepository);
exports.ZoningRepository = ZoningRepository;
//# sourceMappingURL=zoning.repository.js.map