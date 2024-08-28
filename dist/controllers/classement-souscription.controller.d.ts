import { Classement, Souscription } from '../models';
import { ClassementRepository } from '../repositories';
export declare class ClassementSouscriptionController {
    classementRepository: ClassementRepository;
    constructor(classementRepository: ClassementRepository);
    getSouscription(id: typeof Classement.prototype.id): Promise<Souscription>;
}
