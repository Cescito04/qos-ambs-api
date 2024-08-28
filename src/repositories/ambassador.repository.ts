import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {QosAmbsDbDataSource} from '../datasources';
import {Ambassador, AmbassadorRelations, Datahistory, LeBonCoin, Souscription} from '../models';
import {DatahistoryRepository} from './datahistory.repository';
import {LeBonCoinRepository} from './le-bon-coin.repository';
import {SouscriptionRepository} from './souscription.repository';

export class AmbassadorRepository extends DefaultCrudRepository<
  Ambassador,
  typeof Ambassador.prototype.id,
  AmbassadorRelations
> {

  public readonly datahistories: HasManyRepositoryFactory<Datahistory, typeof Ambassador.prototype.id>;

  public readonly leBonCoin: HasOneRepositoryFactory<LeBonCoin, typeof Ambassador.prototype.id>;

  public readonly souscriptions: HasManyRepositoryFactory<Souscription, typeof Ambassador.prototype.id>;

  constructor(
    @inject('datasources.qosAmbsDb') dataSource: QosAmbsDbDataSource, @repository.getter('DatahistoryRepository') protected datahistoryRepositoryGetter: Getter<DatahistoryRepository>, @repository.getter('LeBonCoinRepository') protected leBonCoinRepositoryGetter: Getter<LeBonCoinRepository>, @repository.getter('SouscriptionRepository') protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>,
  ) {
    super(Ambassador, dataSource);
    this.souscriptions = this.createHasManyRepositoryFactoryFor('souscriptions', souscriptionRepositoryGetter,);
    this.registerInclusionResolver('souscriptions', this.souscriptions.inclusionResolver);
    this.leBonCoin = this.createHasOneRepositoryFactoryFor('leBonCoin', leBonCoinRepositoryGetter);
    this.registerInclusionResolver('leBonCoin', this.leBonCoin.inclusionResolver);
    this.datahistories = this.createHasManyRepositoryFactoryFor('datahistories', datahistoryRepositoryGetter,);
    this.registerInclusionResolver('datahistories', this.datahistories.inclusionResolver);
  }
}
