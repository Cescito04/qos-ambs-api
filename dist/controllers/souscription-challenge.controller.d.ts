import { Souscription, Challenge } from '../models';
import { SouscriptionRepository } from '../repositories';
export declare class SouscriptionChallengeController {
    souscriptionRepository: SouscriptionRepository;
    constructor(souscriptionRepository: SouscriptionRepository);
    getChallenge(id: typeof Souscription.prototype.id): Promise<Challenge>;
}
