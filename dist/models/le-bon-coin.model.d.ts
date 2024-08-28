import { Entity } from '@loopback/repository';
export declare class LeBonCoin extends Entity {
    dl: number;
    ul: number;
    id?: string;
    ambassadorId?: string;
    [prop: string]: any;
    constructor(data?: Partial<LeBonCoin>);
}
export interface LeBonCoinRelations {
}
export declare type LeBonCoinWithRelations = LeBonCoin & LeBonCoinRelations;
