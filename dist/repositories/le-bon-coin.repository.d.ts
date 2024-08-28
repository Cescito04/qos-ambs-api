import { DefaultCrudRepository } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { LeBonCoin, LeBonCoinRelations } from '../models';
export declare class LeBonCoinRepository extends DefaultCrudRepository<LeBonCoin, typeof LeBonCoin.prototype.id, LeBonCoinRelations> {
    constructor(dataSource: QosAmbsDbDataSource);
}
