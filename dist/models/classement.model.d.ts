import { Entity } from '@loopback/repository';
export declare class Classement extends Entity {
    id?: string;
    score: number;
    challengeId: string;
    souscriptionId: string;
    [prop: string]: any;
    constructor(data?: Partial<Classement>);
}
export interface ClassementRelations {
}
export declare type ClassementWithRelations = Classement & ClassementRelations;
