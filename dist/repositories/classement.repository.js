"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassementRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ClassementRepository = class ClassementRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, challengeRepositoryGetter, souscriptionRepositoryGetter) {
        super(models_1.Classement, dataSource);
        this.challengeRepositoryGetter = challengeRepositoryGetter;
        this.souscriptionRepositoryGetter = souscriptionRepositoryGetter;
        this.souscription = this.createBelongsToAccessorFor('souscription', souscriptionRepositoryGetter);
        this.registerInclusionResolver('souscription', this.souscription.inclusionResolver);
        this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter);
        this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
    }
};
ClassementRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.qosAmbsDb')),
    tslib_1.__param(1, repository_1.repository.getter('ChallengeRepository')),
    tslib_1.__param(2, repository_1.repository.getter('SouscriptionRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.QosAmbsDbDataSource, Function, Function])
], ClassementRepository);
exports.ClassementRepository = ClassementRepository;
//# sourceMappingURL=classement.repository.js.map