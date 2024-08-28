import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cell4G } from '../models';
import { Cell4GRepository } from '../repositories';
export declare class Cell4GController {
    cell4GRepository: Cell4GRepository;
    constructor(cell4GRepository: Cell4GRepository);
    create(cell4G: Omit<Cell4G, 'id'>): Promise<Cell4G>;
    count(where?: Where<Cell4G>): Promise<Count>;
    find(filter?: Filter<Cell4G>): Promise<Cell4G[]>;
    updateAll(cell4G: Cell4G, where?: Where<Cell4G>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cell4G>): Promise<Cell4G>;
    updateById(id: string, cell4G: Cell4G): Promise<void>;
    replaceById(id: string, cell4G: Cell4G): Promise<void>;
    deleteById(id: string): Promise<void>;
}
