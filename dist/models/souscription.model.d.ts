import { Entity } from '@loopback/repository';
import { Classement } from './classement.model';
import { PropertiesValues } from './properties-values.model';
export declare class Souscription extends Entity {
    id?: string;
    date: string;
    propertiesValues: PropertiesValues[];
    ambassadorId: string;
    challengeId: string;
    classements: Classement[];
    [prop: string]: any;
    constructor(data?: Partial<Souscription>);
}
export interface SouscriptionRelations {
}
export declare type SouscriptionWithRelations = Souscription & SouscriptionRelations;
