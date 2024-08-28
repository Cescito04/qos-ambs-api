import { Count, Filter, Where } from '@loopback/repository';
import { Souscription, Classement } from '../models';
import { SouscriptionRepository } from '../repositories';
export declare class SouscriptionClassementController {
    protected souscriptionRepository: SouscriptionRepository;
    constructor(souscriptionRepository: SouscriptionRepository);
    find(id: string, filter?: Filter<Classement>): Promise<Classement[]>;
    create(id: typeof Souscription.prototype.id, classement: Omit<Classement, 'id'>): Promise<Classement>;
    patch(id: string, classement: Partial<Classement>, where?: Where<Classement>): Promise<Count>;
    delete(id: string, where?: Where<Classement>): Promise<Count>;
}
