import { Entity } from '@loopback/repository';
import { PropertiesValues } from './properties-values.model';
export declare class Properties extends Entity {
    id?: string;
    key: string;
    type?: string;
    challengeId: string;
    propertiesValues: PropertiesValues[];
    [prop: string]: any;
    constructor(data?: Partial<Properties>);
}
export interface PropertiesRelations {
}
export declare type PropertiesWithRelations = Properties & PropertiesRelations;
