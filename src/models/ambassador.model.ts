import {Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {Datahistory} from './datahistory.model';
import {LeBonCoin} from './le-bon-coin.model';
import {Souscription} from './souscription.model';

@model({settings: {strict: false}})
export class Ambassador extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  numero: string;

  @property({
    type: 'string',
  })
  prenom?: string;

  @property({
    type: 'string',
  })
  nom?: string;

  @hasMany(() => Datahistory)
  datahistories: Datahistory[];

  @hasOne(() => LeBonCoin)
  leBonCoin: LeBonCoin;

  @hasMany(() => Souscription)
  souscriptions: Souscription[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ambassador>) {
    super(data);
  }
}

export interface AmbassadorRelations {
  // describe navigational properties here
}

export type AmbassadorWithRelations = Ambassador & AmbassadorRelations;
