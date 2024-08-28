import { DefaultCrudRepository } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Cell3G, Cell3GRelations } from '../models';
export declare class Cell3GRepository extends DefaultCrudRepository<Cell3G, typeof Cell3G.prototype.id, Cell3GRelations> {
    constructor(dataSource: QosAmbsDbDataSource);
}
