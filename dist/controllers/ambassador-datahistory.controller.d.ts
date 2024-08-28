import { Count, Filter, Where } from '@loopback/repository';
import { Ambassador, Datahistory } from '../models';
import { AmbassadorRepository } from '../repositories';
export declare class AmbassadorDatahistoryController {
    protected ambassadorRepository: AmbassadorRepository;
    constructor(ambassadorRepository: AmbassadorRepository);
    find(id: string, filter?: Filter<Datahistory>): Promise<Datahistory[]>;
    create(id: typeof Ambassador.prototype.id, datahistory: Omit<Datahistory, 'id'>): Promise<Datahistory>;
    patch(id: string, datahistory: Partial<Datahistory>, where?: Where<Datahistory>): Promise<Count>;
    delete(id: string, where?: Where<Datahistory>): Promise<Count>;
}
