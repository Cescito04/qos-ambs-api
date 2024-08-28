import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Cell2G, Cell2GRelations} from '../models';

export class Cell2GRepository extends DefaultCrudRepository<
  Cell2G,
  typeof Cell2G.prototype.id,
  Cell2GRelations
> {
  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource,
  ) {
    super(Cell2G, dataSource);
  }
}
