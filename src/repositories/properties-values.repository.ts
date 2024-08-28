import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {PropertiesValues, PropertiesValuesRelations, Souscription, Properties} from '../models';
import {SouscriptionRepository} from './souscription.repository';
import {PropertiesRepository} from './properties.repository';

export class PropertiesValuesRepository extends DefaultCrudRepository<
  PropertiesValues,
  typeof PropertiesValues.prototype.id,
  PropertiesValuesRelations
> {

  public readonly souscription: BelongsToAccessor<Souscription, typeof PropertiesValues.prototype.id>;

  public readonly properties: BelongsToAccessor<Properties, typeof PropertiesValues.prototype.id>;

  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource, @repository.getter('SouscriptionRepository') protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>, @repository.getter('PropertiesRepository') protected propertiesRepositoryGetter: Getter<PropertiesRepository>,
  ) {
    super(PropertiesValues, dataSource);
    this.properties = this.createBelongsToAccessorFor('properties', propertiesRepositoryGetter,);
    this.registerInclusionResolver('properties', this.properties.inclusionResolver);
    this.souscription = this.createBelongsToAccessorFor('souscription', souscriptionRepositoryGetter,);
    this.registerInclusionResolver('souscription', this.souscription.inclusionResolver);
  }
}
