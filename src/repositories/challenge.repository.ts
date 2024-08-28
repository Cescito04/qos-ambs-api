import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Challenge, ChallengeRelations, Souscription, Properties, Classement, Zoning} from '../models';
import {SouscriptionRepository} from './souscription.repository';
import {PropertiesRepository} from './properties.repository';
import {ClassementRepository} from './classement.repository';
import {ZoningRepository} from './zoning.repository';

export class ChallengeRepository extends DefaultCrudRepository<
  Challenge,
  typeof Challenge.prototype.id,
  ChallengeRelations
> {

  public readonly souscriptions: HasManyRepositoryFactory<Souscription, typeof Challenge.prototype.id>;

  public readonly properties: HasManyRepositoryFactory<Properties, typeof Challenge.prototype.id>;

  public readonly classements: HasManyRepositoryFactory<Classement, typeof Challenge.prototype.id>;

  public readonly zoning: HasOneRepositoryFactory<Zoning, typeof Challenge.prototype.id>;

  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource, @repository.getter('SouscriptionRepository') protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>, @repository.getter('PropertiesRepository') protected propertiesRepositoryGetter: Getter<PropertiesRepository>, @repository.getter('ClassementRepository') protected classementRepositoryGetter: Getter<ClassementRepository>, @repository.getter('ZoningRepository') protected zoningRepositoryGetter: Getter<ZoningRepository>,
  ) {
    super(Challenge, dataSource);
    this.zoning = this.createHasOneRepositoryFactoryFor('zoning', zoningRepositoryGetter);
    this.registerInclusionResolver('zoning', this.zoning.inclusionResolver);
    this.classements = this.createHasManyRepositoryFactoryFor('classements', classementRepositoryGetter,);
    this.registerInclusionResolver('classements', this.classements.inclusionResolver);
    this.properties = this.createHasManyRepositoryFactoryFor('properties', propertiesRepositoryGetter,);
    this.registerInclusionResolver('properties', this.properties.inclusionResolver);
    this.souscriptions = this.createHasManyRepositoryFactoryFor('souscriptions', souscriptionRepositoryGetter,);
    this.registerInclusionResolver('souscriptions', this.souscriptions.inclusionResolver);
  }
}
