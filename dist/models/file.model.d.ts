import { Entity } from '@loopback/repository';
export declare class File extends Entity {
    id?: string;
    nom?: string;
    [prop: string]: any;
    constructor(data?: Partial<File>);
}
export interface FileRelations {
}
export declare type FileWithRelations = File & FileRelations;
