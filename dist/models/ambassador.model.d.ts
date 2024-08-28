import { Entity } from '@loopback/repository';
import { Datahistory } from './datahistory.model';
import { LeBonCoin } from './le-bon-coin.model';
import { Souscription } from './souscription.model';
export declare class Ambassador extends Entity {
    id?: string;
    numero: string;
    prenom?: string;
    nom?: string;
    datahistories: Datahistory[];
    leBonCoin: LeBonCoin;
    souscriptions: Souscription[];
    [prop: string]: any;
    constructor(data?: Partial<Ambassador>);
}
export interface AmbassadorRelations {
}
export declare type AmbassadorWithRelations = Ambassador & AmbassadorRelations;
