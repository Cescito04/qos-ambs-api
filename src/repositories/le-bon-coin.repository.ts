import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {LeBonCoin, LeBonCoinRelations} from '../models';

export class LeBonCoinRepository extends DefaultCrudRepository<
  LeBonCoin,
  typeof LeBonCoin.prototype.id,
  LeBonCoinRelations
> {
  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource,
  ) {
    super(LeBonCoin, dataSource);
  }
}
