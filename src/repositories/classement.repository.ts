import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Classement, ClassementRelations, Challenge, Souscription} from '../models';
import {ChallengeRepository} from './challenge.repository';
import {SouscriptionRepository} from './souscription.repository';

export class ClassementRepository extends DefaultCrudRepository<
  Classement,
  typeof Classement.prototype.id,
  ClassementRelations
> {

  public readonly challenge: BelongsToAccessor<Challenge, typeof Classement.prototype.id>;

  public readonly souscription: BelongsToAccessor<Souscription, typeof Classement.prototype.id>;

  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource, @repository.getter('ChallengeRepository') protected challengeRepositoryGetter: Getter<ChallengeRepository>, @repository.getter('SouscriptionRepository') protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>,
  ) {
    super(Classement, dataSource);
    this.souscription = this.createBelongsToAccessorFor('souscription', souscriptionRepositoryGetter,);
    this.registerInclusionResolver('souscription', this.souscription.inclusionResolver);
    this.challenge = this.createBelongsToAccessorFor('challenge', challengeRepositoryGetter,);
    this.registerInclusionResolver('challenge', this.challenge.inclusionResolver);
  }
}
