import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Properties } from '../models';
import { PropertiesRepository } from '../repositories';
export declare class PropertiesController {
    propertiesRepository: PropertiesRepository;
    constructor(propertiesRepository: PropertiesRepository);
    create(properties: Omit<Properties, 'id'>): Promise<Properties>;
    count(where?: Where<Properties>): Promise<Count>;
    find(filter?: Filter<Properties>): Promise<Properties[]>;
    updateAll(properties: Properties, where?: Where<Properties>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Properties>): Promise<Properties>;
    updateById(id: string, properties: Properties): Promise<void>;
    replaceById(id: string, properties: Properties): Promise<void>;
    deleteById(id: string): Promise<void>;
}
