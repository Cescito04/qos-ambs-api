import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Classement, ClassementRelations, Challenge, Souscription } from '../models';
import { ChallengeRepository } from './challenge.repository';
import { SouscriptionRepository } from './souscription.repository';
export declare class ClassementRepository extends DefaultCrudRepository<Classement, typeof Classement.prototype.id, ClassementRelations> {
    protected challengeRepositoryGetter: Getter<ChallengeRepository>;
    protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>;
    readonly challenge: BelongsToAccessor<Challenge, typeof Classement.prototype.id>;
    readonly souscription: BelongsToAccessor<Souscription, typeof Classement.prototype.id>;
    constructor(dataSource: QosAmbsDbDataSource, challengeRepositoryGetter: Getter<ChallengeRepository>, souscriptionRepositoryGetter: Getter<SouscriptionRepository>);
}
