import { Entity } from '@loopback/repository';
export declare class Cell5G extends Entity {
    id?: string;
    nomSite: string;
    nomCellule: string;
    cellId: number;
    tac: number;
    band: number;
    physicalCellId: number;
    logicalRootSequenceIndex: number;
    latitude?: string;
    longitude?: string;
    [prop: string]: any;
    constructor(data?: Partial<Cell5G>);
}
export interface Cell5GRelations {
}
export declare type Cell5GWithRelations = Cell5G & Cell5GRelations;
