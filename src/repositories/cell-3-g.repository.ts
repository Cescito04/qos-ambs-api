import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Cell3G, Cell3GRelations} from '../models';

export class Cell3GRepository extends DefaultCrudRepository<
  Cell3G,
  typeof Cell3G.prototype.id,
  Cell3GRelations
> {
  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource,
  ) {
    super(Cell3G, dataSource);
  }
}
