import { Entity } from '@loopback/repository';
export declare class Cell4G extends Entity {
    id?: string;
    nomSite: string;
    nomCellule: string;
    enodeBId: number;
    localCellId: number;
    Cid: number;
    tac: number;
    physicalCellId: number;
    longitude?: string;
    latitude?: string;
    [prop: string]: any;
    constructor(data?: Partial<Cell4G>);
}
export interface Cell4GRelations {
}
export declare type Cell4GWithRelations = Cell4G & Cell4GRelations;
