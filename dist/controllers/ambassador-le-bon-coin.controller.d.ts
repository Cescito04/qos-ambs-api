import { Count, Filter, Where } from '@loopback/repository';
import { Ambassador, LeBonCoin } from '../models';
import { AmbassadorRepository } from '../repositories';
export declare class AmbassadorLeBonCoinController {
    protected ambassadorRepository: AmbassadorRepository;
    constructor(ambassadorRepository: AmbassadorRepository);
    get(id: string, filter?: Filter<LeBonCoin>): Promise<LeBonCoin>;
    create(id: typeof Ambassador.prototype.id, leBonCoin: Omit<LeBonCoin, 'id'>): Promise<LeBonCoin>;
    patch(id: string, leBonCoin: Partial<LeBonCoin>, where?: Where<LeBonCoin>): Promise<Count>;
    delete(id: string, where?: Where<LeBonCoin>): Promise<Count>;
}
