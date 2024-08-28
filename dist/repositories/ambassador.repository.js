"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbassadorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AmbassadorRepository = class AmbassadorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, datahistoryRepositoryGetter, leBonCoinRepositoryGetter, souscriptionRepositoryGetter) {
        super(models_1.Ambassador, dataSource);
        this.datahistoryRepositoryGetter = datahistoryRepositoryGetter;
        this.leBonCoinRepositoryGetter = leBonCoinRepositoryGetter;
        this.souscriptionRepositoryGetter = souscriptionRepositoryGetter;
        this.souscriptions = this.createHasManyRepositoryFactoryFor('souscriptions', souscriptionRepositoryGetter);
        this.registerInclusionResolver('souscriptions', this.souscriptions.inclusionResolver);
        this.leBonCoin = this.createHasOneRepositoryFactoryFor('leBonCoin', leBonCoinRepositoryGetter);
        this.registerInclusionResolver('leBonCoin', this.leBonCoin.inclusionResolver);
        this.datahistories = this.createHasManyRepositoryFactoryFor('datahistories', datahistoryRepositoryGetter);
        this.registerInclusionResolver('datahistories', this.datahistories.inclusionResolver);
    }
};
AmbassadorRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__param(1, repository_1.repository.getter('DatahistoryRepository')),
    tslib_1.__param(2, repository_1.repository.getter('LeBonCoinRepository')),
    tslib_1.__param(3, repository_1.repository.getter('SouscriptionRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource, Function, Function, Function])
], AmbassadorRepository);
exports.AmbassadorRepository = AmbassadorRepository;
//# sourceMappingURL=ambassador.repository.js.map