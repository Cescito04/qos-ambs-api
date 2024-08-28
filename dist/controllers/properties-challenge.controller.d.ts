import { Properties, Challenge } from '../models';
import { PropertiesRepository } from '../repositories';
export declare class PropertiesChallengeController {
    propertiesRepository: PropertiesRepository;
    constructor(propertiesRepository: PropertiesRepository);
    getChallenge(id: typeof Properties.prototype.id): Promise<Challenge>;
}
