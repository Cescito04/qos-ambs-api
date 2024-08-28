import { Entity } from '@loopback/repository';
import { Classement } from './classement.model';
import { Properties } from './properties.model';
import { Souscription } from './souscription.model';
import { Zoning } from './zoning.model';
export declare class Challenge extends Entity {
    id?: string;
    nom: string;
    description: string;
    date_debut: string;
    date_fin: string;
    image?: string;
    type?: string;
    techno?: string;
    statut?: string;
    zone?: string;
    souscriptions: Souscription[];
    properties: Properties[];
    classements: Classement[];
    zoning: Zoning;
    [prop: string]: any;
    constructor(data?: Partial<Challenge>);
}
export interface ChallengeRelations {
}
export declare type ChallengeWithRelations = Challenge & ChallengeRelations;
