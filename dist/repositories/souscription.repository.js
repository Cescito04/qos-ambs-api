"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SouscriptionRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SouscriptionRepository = class SouscriptionRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, propertiesValuesRepositoryGetter, ambassadorRepositoryGetter, challengeRepositoryGetter, classementRepositoryGetter) {
        super(models_1.Souscription, dataSource);
        this.propertiesValuesRepositoryGetter = propertiesValuesRepositoryGetter;
        this.ambassadorRepositoryGetter = ambassadorRepositoryGetter;
        this.challengeRepositoryGetter = challengeRepositoryGetter;
        this.classementRepositoryGetter = classementRepositoryGetter;
        this.classements = this.createHasManyRepositoryFactoryFor('classements', classementRepositoryGetter);
        this.registerInclusionResolver('classements', this.classements.inclusionResolver);
        this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter);
        this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
        this.ambassador = this.createBelongsToAccessorFor('ambassador', ambassadorRepositoryGetter);
        this.registerInclusionResolver('ambassador', this.ambassador.inclusionResolver);
        this.propertiesValues = this.createHasManyRepositoryFactoryFor('propertiesValues', propertiesValuesRepositoryGetter);
        this.registerInclusionResolver('propertiesValues', this.propertiesValues.inclusionResolver);
    }
};
SouscriptionRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__param(1, repository_1.repository.getter('PropertiesValuesRepository')),
    tslib_1.__param(2, repository_1.repository.getter('AmbassadorRepository')),
    tslib_1.__param(3, repository_1.repository.getter('ChallengeRepository')),
    tslib_1.__param(4, repository_1.repository.getter('ClassementRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource, Function, Function, Function, Function])
], SouscriptionRepository);
exports.SouscriptionRepository = SouscriptionRepository;
//# sourceMappingURL=souscription.repository.js.map