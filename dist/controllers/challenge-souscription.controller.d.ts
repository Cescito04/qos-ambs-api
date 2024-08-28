import { Count, Filter, Where } from '@loopback/repository';
import { Challenge, Souscription } from '../models';
import { ChallengeRepository } from '../repositories';
export declare class ChallengeSouscriptionController {
    protected challengeRepository: ChallengeRepository;
    constructor(challengeRepository: ChallengeRepository);
    find(id: string, filter?: Filter<Souscription>): Promise<Souscription[]>;
    create(id: typeof Challenge.prototype.id, souscription: Omit<Souscription, 'id'>): Promise<Souscription>;
    patch(id: string, souscription: Partial<Souscription>, where?: Where<Souscription>): Promise<Count>;
    delete(id: string, where?: Where<Souscription>): Promise<Count>;
}
