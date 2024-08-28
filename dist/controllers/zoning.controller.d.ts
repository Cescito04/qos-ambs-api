import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Zoning } from '../models';
import { ZoningRepository } from '../repositories';
export declare class ZoningController {
    zoningRepository: ZoningRepository;
    constructor(zoningRepository: ZoningRepository);
    create(zoning: Omit<Zoning, 'id'>): Promise<Zoning>;
    count(where?: Where<Zoning>): Promise<Count>;
    find(filter?: Filter<Zoning>): Promise<Zoning[]>;
    updateAll(zoning: Zoning, where?: Where<Zoning>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Zoning>): Promise<Zoning>;
    updateById(id: string, zoning: Zoning): Promise<void>;
    replaceById(id: string, zoning: Zoning): Promise<void>;
    deleteById(id: string): Promise<void>;
}
