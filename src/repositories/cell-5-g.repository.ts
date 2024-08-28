import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Cell5G, Cell5GRelations} from '../models';

export class Cell5GRepository extends DefaultCrudRepository<
  Cell5G,
  typeof Cell5G.prototype.id,
  Cell5GRelations
> {
  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource,
  ) {
    super(Cell5G, dataSource);
  }
}
