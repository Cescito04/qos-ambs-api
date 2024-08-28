import { DefaultCrudRepository } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Datahistory, DatahistoryRelations } from '../models';
export declare class DatahistoryRepository extends DefaultCrudRepository<Datahistory, typeof Datahistory.prototype.id, DatahistoryRelations> {
    constructor(dataSource: QosAmbsDbDataSource);
}
