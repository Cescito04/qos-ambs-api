import { Entity } from '@loopback/repository';
export declare class Zoning extends Entity {
    id?: string;
    attributes: {
        FID: number;
        CODE: number;
        NOM: string;
        THEME: string;
        PAYS: string;
        IDUU: string;
        SUM_SUPERF: number;
        Shape_Leng: number;
        Shape_Le_1: number;
        Shape_Area: number;
        Shape__Area: number;
        Shape__Length: number;
    };
    geometry: {
        rings?: number[][][];
    };
    challengeId: string;
    [prop: string]: any;
    constructor(data?: Partial<Zoning>);
}
export interface ZoningRelations {
}
export declare type ZoningWithRelations = Zoning & ZoningRelations;
