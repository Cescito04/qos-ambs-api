import { DefaultCrudRepository } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Cell2G, Cell2GRelations } from '../models';
export declare class Cell2GRepository extends DefaultCrudRepository<Cell2G, typeof Cell2G.prototype.id, Cell2GRelations> {
    constructor(dataSource: QosAmbsDbDataSource);
}
