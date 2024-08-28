import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Datahistory } from '../models';
import { AmbassadorRepository, DatahistoryRepository } from '../repositories';
export declare class DataHistoryController {
    datahistoryRepository: DatahistoryRepository;
    ambassadorRepository: AmbassadorRepository;
    constructor(datahistoryRepository: DatahistoryRepository, ambassadorRepository: AmbassadorRepository);
    create(datahistory: Omit<Datahistory, 'id'>): Promise<Datahistory>;
    count(where?: Where<Datahistory>): Promise<Count>;
    find(filter?: Filter<Datahistory>): Promise<Datahistory[]>;
    updateAll(datahistory: Datahistory, where?: Where<Datahistory>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Datahistory>): Promise<Datahistory>;
    updateById(id: string, datahistory: Datahistory): Promise<void>;
    replaceById(id: string, datahistory: Datahistory): Promise<void>;
    deleteById(id: string): Promise<void>;
    getAverageSpeed(ambassadorId: string, technology: string): Promise<any>;
}
