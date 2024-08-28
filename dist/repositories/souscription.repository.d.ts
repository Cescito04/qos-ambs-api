import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Souscription, SouscriptionRelations, PropertiesValues, Ambassador, Challenge, Classement } from '../models';
import { PropertiesValuesRepository } from './properties-values.repository';
import { AmbassadorRepository } from './ambassador.repository';
import { ChallengeRepository } from './challenge.repository';
import { ClassementRepository } from './classement.repository';
export declare class SouscriptionRepository extends DefaultCrudRepository<Souscription, typeof Souscription.prototype.id, SouscriptionRelations> {
    protected propertiesValuesRepositoryGetter: Getter<PropertiesValuesRepository>;
    protected ambassadorRepositoryGetter: Getter<AmbassadorRepository>;
    protected challengeRepositoryGetter: Getter<ChallengeRepository>;
    protected classementRepositoryGetter: Getter<ClassementRepository>;
    readonly propertiesValues: HasManyRepositoryFactory<PropertiesValues, typeof Souscription.prototype.id>;
    readonly ambassador: BelongsToAccessor<Ambassador, typeof Souscription.prototype.id>;
    readonly challenge: BelongsToAccessor<Challenge, typeof Souscription.prototype.id>;
    readonly classements: HasManyRepositoryFactory<Classement, typeof Souscription.prototype.id>;
    constructor(dataSource: QosAmbsDbDataSource, propertiesValuesRepositoryGetter: Getter<PropertiesValuesRepository>, ambassadorRepositoryGetter: Getter<AmbassadorRepository>, challengeRepositoryGetter: Getter<ChallengeRepository>, classementRepositoryGetter: Getter<ClassementRepository>);
}
