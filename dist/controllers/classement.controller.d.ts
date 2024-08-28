import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Classement } from '../models';
import { ClassementRepository } from '../repositories';
export declare class ClassementController {
    classementRepository: ClassementRepository;
    constructor(classementRepository: ClassementRepository);
    create(classement: Omit<Classement, 'id'>): Promise<Classement>;
    count(where?: Where<Classement>): Promise<Count>;
    find(filter?: Filter<Classement>): Promise<Classement[]>;
    updateAll(classement: Classement, where?: Where<Classement>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Classement>): Promise<Classement>;
    updateById(id: string, classement: Classement): Promise<void>;
    replaceById(id: string, classement: Classement): Promise<void>;
    deleteById(id: string): Promise<void>;
    calculateAverage(values: number[]): number;
}
