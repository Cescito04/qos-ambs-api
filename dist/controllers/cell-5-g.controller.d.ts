import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cell5G } from '../models';
import { Cell5GRepository } from '../repositories';
export declare class Cell5GController {
    cell5GRepository: Cell5GRepository;
    constructor(cell5GRepository: Cell5GRepository);
    create(cell5G: Omit<Cell5G, 'id'>): Promise<Cell5G>;
    getSites5Gs(band: number): Promise<any[]>;
    count(where?: Where<Cell5G>): Promise<Count>;
    find(filter?: Filter<Cell5G>): Promise<Cell5G[]>;
    updateAll(cell5G: Cell5G, where?: Where<Cell5G>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cell5G>): Promise<Cell5G>;
    updateById(id: string, cell5G: Cell5G): Promise<void>;
    replaceById(id: string, cell5G: Cell5G): Promise<void>;
    deleteById(id: string): Promise<void>;
}
