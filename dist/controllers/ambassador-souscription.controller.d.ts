import { Count, Filter, Where } from '@loopback/repository';
import { Ambassador, Souscription } from '../models';
import { AmbassadorRepository } from '../repositories';
export declare class AmbassadorSouscriptionController {
    protected ambassadorRepository: AmbassadorRepository;
    constructor(ambassadorRepository: AmbassadorRepository);
    find(id: string, filter?: Filter<Souscription>): Promise<Souscription[]>;
    create(id: typeof Ambassador.prototype.id, souscription: Omit<Souscription, 'id'>): Promise<Souscription>;
    patch(id: string, souscription: Partial<Souscription>, where?: Where<Souscription>): Promise<Count>;
    delete(id: string, where?: Where<Souscription>): Promise<Count>;
}
