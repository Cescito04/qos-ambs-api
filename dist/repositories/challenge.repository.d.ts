import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Challenge, ChallengeRelations, Souscription, Properties, Classement, Zoning } from '../models';
import { SouscriptionRepository } from './souscription.repository';
import { PropertiesRepository } from './properties.repository';
import { ClassementRepository } from './classement.repository';
import { ZoningRepository } from './zoning.repository';
export declare class ChallengeRepository extends DefaultCrudRepository<Challenge, typeof Challenge.prototype.id, ChallengeRelations> {
    protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>;
    protected propertiesRepositoryGetter: Getter<PropertiesRepository>;
    protected classementRepositoryGetter: Getter<ClassementRepository>;
    protected zoningRepositoryGetter: Getter<ZoningRepository>;
    readonly souscriptions: HasManyRepositoryFactory<Souscription, typeof Challenge.prototype.id>;
    readonly properties: HasManyRepositoryFactory<Properties, typeof Challenge.prototype.id>;
    readonly classements: HasManyRepositoryFactory<Classement, typeof Challenge.prototype.id>;
    readonly zoning: HasOneRepositoryFactory<Zoning, typeof Challenge.prototype.id>;
    constructor(dataSource: QosAmbsDbDataSource, souscriptionRepositoryGetter: Getter<SouscriptionRepository>, propertiesRepositoryGetter: Getter<PropertiesRepository>, classementRepositoryGetter: Getter<ClassementRepository>, zoningRepositoryGetter: Getter<ZoningRepository>);
}
