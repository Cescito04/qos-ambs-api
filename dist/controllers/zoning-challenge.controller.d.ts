import { Zoning, Challenge } from '../models';
import { ZoningRepository } from '../repositories';
export declare class ZoningChallengeController {
    zoningRepository: ZoningRepository;
    constructor(zoningRepository: ZoningRepository);
    getChallenge(id: typeof Zoning.prototype.id): Promise<Challenge>;
}
