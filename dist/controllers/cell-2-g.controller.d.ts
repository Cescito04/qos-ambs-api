import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cell2G } from '../models';
import { Cell2GRepository } from '../repositories';
export declare class Cell2GController {
    cell2GRepository: Cell2GRepository;
    constructor(cell2GRepository: Cell2GRepository);
    create(cell2G: Omit<Cell2G, 'id'>): Promise<Cell2G>;
    count(where?: Where<Cell2G>): Promise<Count>;
    find(filter?: Filter<Cell2G>): Promise<Cell2G[]>;
    updateAll(cell2G: Cell2G, where?: Where<Cell2G>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cell2G>): Promise<Cell2G>;
    updateById(id: string, cell2G: Cell2G): Promise<void>;
    replaceById(id: string, cell2G: Cell2G): Promise<void>;
    deleteById(id: string): Promise<void>;
}
