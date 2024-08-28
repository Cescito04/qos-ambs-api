import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Properties, PropertiesRelations, Challenge, PropertiesValues } from '../models';
import { ChallengeRepository } from './challenge.repository';
import { PropertiesValuesRepository } from './properties-values.repository';
export declare class PropertiesRepository extends DefaultCrudRepository<Properties, typeof Properties.prototype.id, PropertiesRelations> {
    protected challengeRepositoryGetter: Getter<ChallengeRepository>;
    protected propertiesValuesRepositoryGetter: Getter<PropertiesValuesRepository>;
    readonly challenge: BelongsToAccessor<Challenge, typeof Properties.prototype.id>;
    readonly propertiesValues: HasManyRepositoryFactory<PropertiesValues, typeof Properties.prototype.id>;
    constructor(dataSource: QosAmbsDbDataSource, challengeRepositoryGetter: Getter<ChallengeRepository>, propertiesValuesRepositoryGetter: Getter<PropertiesValuesRepository>);
}
