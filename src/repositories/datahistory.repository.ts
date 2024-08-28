import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Datahistory, DatahistoryRelations} from '../models';

export class DatahistoryRepository extends DefaultCrudRepository<
  Datahistory,
  typeof Datahistory.prototype.id,
  DatahistoryRelations
> {
  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource,
  ) {
    super(Datahistory, dataSource);
  }
}
