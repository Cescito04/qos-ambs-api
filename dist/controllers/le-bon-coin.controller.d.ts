import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { LeBonCoin } from '../models';
import { LeBonCoinRepository } from '../repositories';
export declare class LeBonCoinController {
    leBonCoinRepository: LeBonCoinRepository;
    constructor(leBonCoinRepository: LeBonCoinRepository);
    create(leBonCoin: Omit<LeBonCoin, 'id'>): Promise<LeBonCoin>;
    count(where?: Where<LeBonCoin>): Promise<Count>;
    find(filter?: Filter<LeBonCoin>): Promise<LeBonCoin[]>;
    updateAll(leBonCoin: LeBonCoin, where?: Where<LeBonCoin>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<LeBonCoin>): Promise<LeBonCoin>;
    updateById(id: string, leBonCoin: LeBonCoin): Promise<void>;
    replaceById(id: string, leBonCoin: LeBonCoin): Promise<void>;
    deleteById(id: string): Promise<void>;
}
