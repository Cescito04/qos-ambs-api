import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { QosAmbsDbDataSource } from '../datasources';
import { Ambassador, AmbassadorRelations, Datahistory, LeBonCoin, Souscription } from '../models';
import { DatahistoryRepository } from './datahistory.repository';
import { LeBonCoinRepository } from './le-bon-coin.repository';
import { SouscriptionRepository } from './souscription.repository';
export declare class AmbassadorRepository extends DefaultCrudRepository<Ambassador, typeof Ambassador.prototype.id, AmbassadorRelations> {
    protected datahistoryRepositoryGetter: Getter<DatahistoryRepository>;
    protected leBonCoinRepositoryGetter: Getter<LeBonCoinRepository>;
    protected souscriptionRepositoryGetter: Getter<SouscriptionRepository>;
    readonly datahistories: HasManyRepositoryFactory<Datahistory, typeof Ambassador.prototype.id>;
    readonly leBonCoin: HasOneRepositoryFactory<LeBonCoin, typeof Ambassador.prototype.id>;
    readonly souscriptions: HasManyRepositoryFactory<Souscription, typeof Ambassador.prototype.id>;
    constructor(dataSource: QosAmbsDbDataSource, datahistoryRepositoryGetter: Getter<DatahistoryRepository>, leBonCoinRepositoryGetter: Getter<LeBonCoinRepository>, souscriptionRepositoryGetter: Getter<SouscriptionRepository>);
}
