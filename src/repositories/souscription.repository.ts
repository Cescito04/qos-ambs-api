import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Souscription, SouscriptionRelations, PropertiesValues, Ambassador, Challenge, Classement} from '../models';
import {PropertiesValuesRepository} from './properties-values.repository';
import {AmbassadorRepository} from './ambassador.repository';
import {ChallengeRepository} from './challenge.repository';
import {ClassementRepository} from './classement.repository';

export class SouscriptionRepository extends DefaultCrudRepository<
  Souscription,
  typeof Souscription.prototype.id,
  SouscriptionRelations
> {

  public readonly propertiesValues: HasManyRepositoryFactory<PropertiesValues, typeof Souscription.prototype.id>;

  public readonly ambassador: BelongsToAccessor<Ambassador, typeof Souscription.prototype.id>;

  public readonly challenge: BelongsToAccessor<Challenge, typeof Souscription.prototype.id>;

  public readonly classements: HasManyRepositoryFactory<Classement, typeof Souscription.prototype.id>;

  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource, @repository.getter('PropertiesValuesRepository') protected propertiesValuesRepositoryGetter: Getter<PropertiesValuesRepository>, @repository.getter('AmbassadorRepository') protected ambassadorRepositoryGetter: Getter<AmbassadorRepository>, @repository.getter('ChallengeRepository') protected challengeRepositoryGetter: Getter<ChallengeRepository>, @repository.getter('ClassementRepository') protected classementRepositoryGetter: Getter<ClassementRepository>,
  ) {
    super(Souscription, dataSource);
    this.classements = this.createHasManyRepositoryFactoryFor('classements', classementRepositoryGetter,);
    this.registerInclusionResolver('classements', this.classements.inclusionResolver);
    this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter,);
    this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
    this.ambassador = this.createBelongsToAccessorFor('ambassador', ambassadorRepositoryGetter,);
    this.registerInclusionResolver('ambassador', this.ambassador.inclusionResolver);
    this.propertiesValues = this.createHasManyRepositoryFactoryFor('propertiesValues', propertiesValuesRepositoryGetter,);
    this.registerInclusionResolver('propertiesValues', this.propertiesValues.inclusionResolver);
  }
}
