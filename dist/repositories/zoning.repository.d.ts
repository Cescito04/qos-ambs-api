import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Zoning, ZoningRelations, Challenge } from '../models';
import { ChallengeRepository } from './challenge.repository';
export declare class ZoningRepository extends DefaultCrudRepository<Zoning, typeof Zoning.prototype.id, ZoningRelations> {
    protected challengeRepositoryGetter: Getter<ChallengeRepository>;
    readonly challenge: BelongsToAccessor<Challenge, typeof Zoning.prototype.id>;
    constructor(dataSource: QosAmbsDbDataSource, challengeRepositoryGetter: Getter<ChallengeRepository>);
}
