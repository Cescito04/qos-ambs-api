import { Count, Filter, Where } from '@loopback/repository';
import { Souscription, PropertiesValues } from '../models';
import { SouscriptionRepository } from '../repositories';
export declare class SouscriptionPropertiesValuesController {
    protected souscriptionRepository: SouscriptionRepository;
    constructor(souscriptionRepository: SouscriptionRepository);
    find(id: string, filter?: Filter<PropertiesValues>): Promise<PropertiesValues[]>;
    create(id: typeof Souscription.prototype.id, propertiesValues: Omit<PropertiesValues, 'id'>): Promise<PropertiesValues>;
    patch(id: string, propertiesValues: Partial<PropertiesValues>, where?: Where<PropertiesValues>): Promise<Count>;
    delete(id: string, where?: Where<PropertiesValues>): Promise<Count>;
}
