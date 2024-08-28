import { Souscription, Ambassador } from '../models';
import { SouscriptionRepository } from '../repositories';
export declare class SouscriptionAmbassadorController {
    souscriptionRepository: SouscriptionRepository;
    constructor(souscriptionRepository: SouscriptionRepository);
    getAmbassador(id: typeof Souscription.prototype.id): Promise<Ambassador>;
}
