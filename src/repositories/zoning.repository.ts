import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Zoning, ZoningRelations, Challenge} from '../models';
import {ChallengeRepository} from './challenge.repository';

export class ZoningRepository extends DefaultCrudRepository<
  Zoning,
  typeof Zoning.prototype.id,
  ZoningRelations
> {

  public readonly challenge: BelongsToAccessor<Challenge, typeof Zoning.prototype.id>;

  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource, @repository.getter('ChallengeRepository') protected challengeRepositoryGetter: Getter<ChallengeRepository>,
  ) {
    super(Zoning, dataSource);
    this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter,);
    this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
  }
}
