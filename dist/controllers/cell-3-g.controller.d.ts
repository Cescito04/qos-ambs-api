import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cell3G } from '../models';
import { Cell3GRepository } from '../repositories';
export declare class Cell3GController {
    cell3GRepository: Cell3GRepository;
    constructor(cell3GRepository: Cell3GRepository);
    create(cell3G: Omit<Cell3G, 'id'>): Promise<Cell3G>;
    count(where?: Where<Cell3G>): Promise<Count>;
    find(filter?: Filter<Cell3G>): Promise<Cell3G[]>;
    updateAll(cell3G: Cell3G, where?: Where<Cell3G>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cell3G>): Promise<Cell3G>;
    updateById(id: string, cell3G: Cell3G): Promise<void>;
    replaceById(id: string, cell3G: Cell3G): Promise<void>;
    deleteById(id: string): Promise<void>;
}
