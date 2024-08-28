import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {File, FileRelations} from '../models';

export class FileRepository extends DefaultCrudRepository<
  File,
  typeof File.prototype.id,
  FileRelations
> {
  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource,
  ) {
    super(File, dataSource);
  }
}
