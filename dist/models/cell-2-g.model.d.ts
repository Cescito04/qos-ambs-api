import { Entity } from '@loopback/repository';
export declare class Cell2G extends Entity {
    nomSite: string;
    id?: string;
    nomCellule: string;
    lac: number;
    rac: number;
    ci: number;
    longitude?: string;
    latitude?: string;
    [prop: string]: any;
    constructor(data?: Partial<Cell2G>);
}
export interface Cell2GRelations {
}
export declare type Cell2GWithRelations = Cell2G & Cell2GRelations;
