"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ChallengeRepository = class ChallengeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, souscriptionRepositoryGetter, propertiesRepositoryGetter, classementRepositoryGetter, zoningRepositoryGetter) {
        super(models_1.Challenge, dataSource);
        this.souscriptionRepositoryGetter = souscriptionRepositoryGetter;
        this.propertiesRepositoryGetter = propertiesRepositoryGetter;
        this.classementRepositoryGetter = classementRepositoryGetter;
        this.zoningRepositoryGetter = zoningRepositoryGetter;
        this.zoning = this.createHasOneRepositoryFactoryFor('zoning', zoningRepositoryGetter);
        this.registerInclusionResolver('zoning', this.zoning.inclusionResolver);
        this.classements = this.createHasManyRepositoryFactoryFor('classements', classementRepositoryGetter);
        this.registerInclusionResolver('classements', this.classements.inclusionResolver);
        this.properties = this.createHasManyRepositoryFactoryFor('properties', propertiesRepositoryGetter);
        this.registerInclusionResolver('properties', this.properties.inclusionResolver);
        this.souscriptions = this.createHasManyRepositoryFactoryFor('souscriptions', souscriptionRepositoryGetter);
        this.registerInclusionResolver('souscriptions', this.souscriptions.inclusionResolver);
    }
};
ChallengeRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__param(1, repository_1.repository.getter('SouscriptionRepository')),
    tslib_1.__param(2, repository_1.repository.getter('PropertiesRepository')),
    tslib_1.__param(3, repository_1.repository.getter('ClassementRepository')),
    tslib_1.__param(4, repository_1.repository.getter('ZoningRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource, Function, Function, Function, Function])
], ChallengeRepository);
exports.ChallengeRepository = ChallengeRepository;
//# sourceMappingURL=challenge.repository.js.map