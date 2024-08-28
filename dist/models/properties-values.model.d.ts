import { Entity } from '@loopback/repository';
export declare class PropertiesValues extends Entity {
    id?: string;
    key: string;
    type?: string;
    value?: string;
    souscriptionId: string;
    propertiesId: string;
    [prop: string]: any;
    constructor(data?: Partial<PropertiesValues>);
}
export interface PropertiesValuesRelations {
}
export declare type PropertiesValuesWithRelations = PropertiesValues & PropertiesValuesRelations;
