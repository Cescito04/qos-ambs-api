import { Count, Filter, Where } from '@loopback/repository';
import { Properties, PropertiesValues } from '../models';
import { PropertiesRepository } from '../repositories';
export declare class PropertiesPropertiesValuesController {
    protected propertiesRepository: PropertiesRepository;
    constructor(propertiesRepository: PropertiesRepository);
    find(id: string, filter?: Filter<PropertiesValues>): Promise<PropertiesValues[]>;
    create(id: typeof Properties.prototype.id, propertiesValues: Omit<PropertiesValues, 'id'>): Promise<PropertiesValues>;
    patch(id: string, propertiesValues: Partial<PropertiesValues>, where?: Where<PropertiesValues>): Promise<Count>;
    delete(id: string, where?: Where<PropertiesValues>): Promise<Count>;
}
