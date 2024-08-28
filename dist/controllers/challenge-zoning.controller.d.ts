import { Count, Filter, Where } from '@loopback/repository';
import { Challenge, Zoning } from '../models';
import { ChallengeRepository } from '../repositories';
export declare class ChallengeZoningController {
    protected challengeRepository: ChallengeRepository;
    constructor(challengeRepository: ChallengeRepository);
    get(id: string, filter?: Filter<Zoning>): Promise<Zoning>;
    create(id: typeof Challenge.prototype.id, zoning: Omit<Zoning, 'id'>): Promise<Zoning>;
    patch(id: string, zoning: Partial<Zoning>, where?: Where<Zoning>): Promise<Count>;
    delete(id: string, where?: Where<Zoning>): Promise<Count>;
}
