import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PropertiesValues } from '../models';
import { PropertiesValuesRepository } from '../repositories';
export declare class PropertiesValuesController {
    propertiesValuesRepository: PropertiesValuesRepository;
    constructor(propertiesValuesRepository: PropertiesValuesRepository);
    create(propertiesValues: Omit<PropertiesValues, 'id'>): Promise<PropertiesValues>;
    count(where?: Where<PropertiesValues>): Promise<Count>;
    find(filter?: Filter<PropertiesValues>): Promise<PropertiesValues[]>;
    updateAll(propertiesValues: PropertiesValues, where?: Where<PropertiesValues>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<PropertiesValues>): Promise<PropertiesValues>;
    updateById(id: string, propertiesValues: PropertiesValues): Promise<void>;
    replaceById(id: string, propertiesValues: PropertiesValues): Promise<void>;
    deleteById(id: string): Promise<void>;
}
