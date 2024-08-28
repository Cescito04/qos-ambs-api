import { Count, Filter, Where } from '@loopback/repository';
import { Challenge, Classement } from '../models';
import { ChallengeRepository } from '../repositories';
export declare class ChallengeClassementController {
    protected challengeRepository: ChallengeRepository;
    constructor(challengeRepository: ChallengeRepository);
    find(id: string, filter?: Filter<Classement>): Promise<Classement[]>;
    create(id: typeof Challenge.prototype.id, classement: Omit<Classement, 'id'>): Promise<Classement>;
    patch(id: string, classement: Partial<Classement>, where?: Where<Classement>): Promise<Count>;
    delete(id: string, where?: Where<Classement>): Promise<Count>;
}
