/// <reference types="express" />
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Request, Response } from '@loopback/rest';
import { Ambassador } from '../models';
import { AmbassadorRepository, FileRepository } from '../repositories';
export declare class AmbassadorController {
    ambassadorRepository: AmbassadorRepository;
    fileUploadRepository: FileRepository;
    private storageDirectory;
    private uploadHandler;
    constructor(ambassadorRepository: AmbassadorRepository, fileUploadRepository: FileRepository, storageDirectory: string);
    importExcel(request: Request, response: Response): Promise<object>;
    create(ambassador: Omit<Ambassador, 'id'>): Promise<Ambassador>;
    count(where?: Where<Ambassador>): Promise<Count>;
    find(filter?: Filter<Ambassador>): Promise<Ambassador[]>;
    updateAll(ambassador: Ambassador, where?: Where<Ambassador>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Ambassador>): Promise<Ambassador>;
    updateById(id: string, ambassador: Ambassador): Promise<void>;
    replaceById(id: string, ambassador: Ambassador): Promise<void>;
    deleteById(id: string): Promise<void>;
}
