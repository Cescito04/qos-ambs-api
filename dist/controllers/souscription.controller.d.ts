import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Souscription } from '../models';
import { SouscriptionRepository } from '../repositories';
export declare class SouscriptionController {
    souscriptionRepository: SouscriptionRepository;
    constructor(souscriptionRepository: SouscriptionRepository);
    create(souscription: Omit<Souscription, 'id'>): Promise<Souscription>;
    count(where?: Where<Souscription>): Promise<Count>;
    find(filter?: Filter<Souscription>): Promise<Souscription[]>;
    updateAll(souscription: Souscription, where?: Where<Souscription>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Souscription>): Promise<Souscription>;
    updateById(id: string, souscription: Souscription): Promise<void>;
    replaceById(id: string, souscription: Souscription): Promise<void>;
    deleteById(id: string): Promise<void>;
}
