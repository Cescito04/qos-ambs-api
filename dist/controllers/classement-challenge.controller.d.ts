import { Classement, Challenge } from '../models';
import { ClassementRepository } from '../repositories';
export declare class ClassementChallengeController {
    classementRepository: ClassementRepository;
    constructor(classementRepository: ClassementRepository);
    getChallenge(id: typeof Classement.prototype.id): Promise<Challenge>;
}
