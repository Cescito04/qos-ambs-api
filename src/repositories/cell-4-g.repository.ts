import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Cell4G, Cell4GRelations} from '../models';

export class Cell4GRepository extends DefaultCrudRepository<
  Cell4G,
  typeof Cell4G.prototype.id,
  Cell4GRelations
> {
  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource,
  ) {
    super(Cell4G, dataSource);
  }
}
