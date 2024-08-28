import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { PropertiesValues, PropertiesValuesRelations, Souscription, Properties } from '../models';
import { SouscriptionRepository } from './souscription.repository';
import { PropertiesRepository } from './properties.repository';
export declare class PropertiesValuesRepository extends DefaultCrudRepository<PropertiesValues, typeof PropertiesValues.prototype.id, PropertiesValuesRelations> {
    protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>;
    protected propertiesRepositoryGetter: Getter<PropertiesRepository>;
    readonly souscription: BelongsToAccessor<Souscription, typeof PropertiesValues.prototype.id>;
    readonly properties: BelongsToAccessor<Properties, typeof PropertiesValues.prototype.id>;
    constructor(dataSource: QosAmbsDbDataSource, souscriptionRepositoryGetter: Getter<SouscriptionRepository>, propertiesRepositoryGetter: Getter<PropertiesRepository>);
}
