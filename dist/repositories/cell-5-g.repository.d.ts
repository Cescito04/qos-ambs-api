import { DefaultCrudRepository } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Cell5G, Cell5GRelations } from '../models';
export declare class Cell5GRepository extends DefaultCrudRepository<Cell5G, typeof Cell5G.prototype.id, Cell5GRelations> {
    constructor(dataSource: QosAmbsDbDataSource);
}
