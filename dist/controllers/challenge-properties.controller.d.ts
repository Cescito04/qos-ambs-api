import { Count, Filter, Where } from '@loopback/repository';
import { Challenge, Properties } from '../models';
import { ChallengeRepository } from '../repositories';
export declare class ChallengePropertiesController {
    protected challengeRepository: ChallengeRepository;
    constructor(challengeRepository: ChallengeRepository);
    find(id: string, filter?: Filter<Properties>): Promise<Properties[]>;
    create(id: typeof Challenge.prototype.id, properties: Omit<Properties, 'id'>): Promise<Properties>;
    patch(id: string, properties: Partial<Properties>, where?: Where<Properties>): Promise<Count>;
    delete(id: string, where?: Where<Properties>): Promise<Count>;
}
