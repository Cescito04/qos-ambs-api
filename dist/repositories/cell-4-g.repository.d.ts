import { DefaultCrudRepository } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Cell4G, Cell4GRelations } from '../models';
export declare class Cell4GRepository extends DefaultCrudRepository<Cell4G, typeof Cell4G.prototype.id, Cell4GRelations> {
    constructor(dataSource: QosAmbsDbDataSource);
}
