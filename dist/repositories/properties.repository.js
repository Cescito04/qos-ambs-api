"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PropertiesRepository = class PropertiesRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, challengeRepositoryGetter, propertiesValuesRepositoryGetter) {
        super(models_1.Properties, dataSource);
        this.challengeRepositoryGetter = challengeRepositoryGetter;
        this.propertiesValuesRepositoryGetter = propertiesValuesRepositoryGetter;
        this.propertiesValues = this.createHasManyRepositoryFactoryFor('propertiesValues', propertiesValuesRepositoryGetter);
        this.registerInclusionResolver('propertiesValues', this.propertiesValues.inclusionResolver);
        this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter);
        this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
    }
};
PropertiesRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__param(1, repository_1.repository.getter('ChallengeRepository')),
    tslib_1.__param(2, repository_1.repository.getter('PropertiesValuesRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource, Function, Function])
], PropertiesRepository);
exports.PropertiesRepository = PropertiesRepository;
//# sourceMappingURL=properties.repository.js.map