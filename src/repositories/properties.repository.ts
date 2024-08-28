import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Properties, PropertiesRelations, Challenge, PropertiesValues} from '../models';
import {ChallengeRepository} from './challenge.repository';
import {PropertiesValuesRepository} from './properties-values.repository';

export class PropertiesRepository extends DefaultCrudRepository<
  Properties,
  typeof Properties.prototype.id,
  PropertiesRelations
> {

  public readonly challenge: BelongsToAccessor<Challenge, typeof Properties.prototype.id>;

  public readonly propertiesValues: HasManyRepositoryFactory<PropertiesValues, typeof Properties.prototype.id>;

  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource, @repository.getter('ChallengeRepository') protected challengeRepositoryGetter: Getter<ChallengeRepository>, @repository.getter('PropertiesValuesRepository') protected propertiesValuesRepositoryGetter: Getter<PropertiesValuesRepository>,
  ) {
    super(Properties, dataSource);
    this.propertiesValues = this.createHasManyRepositoryFactoryFor('propertiesValues', propertiesValuesRepositoryGetter,);
    this.registerInclusionResolver('propertiesValues', this.propertiesValues.inclusionResolver);
    this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter,);
    this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
  }
}
