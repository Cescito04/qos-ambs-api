import { Entity } from '@loopback/repository';
export declare class Cell3G extends Entity {
    id?: string;
    nomSite: string;
    nomCellule: string;
    cellId: number;
    lac: number;
    rac: string;
    latitude?: string;
    longitude?: string;
    [prop: string]: any;
    constructor(data?: Partial<Cell3G>);
}
export interface Cell3GRelations {
}
export declare type Cell3GWithRelations = Cell3G & Cell3GRelations;
