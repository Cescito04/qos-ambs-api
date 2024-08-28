import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Ambassador} from './ambassador.model';
import {Challenge} from './challenge.model';
import {Classement} from './classement.model';
import {PropertiesValues} from './properties-values.model';

@model({settings: {strict: false}})
export class Souscription extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @hasMany(() => PropertiesValues)
  propertiesValues: PropertiesValues[];

  @belongsTo(() => Ambassador)
  ambassadorId: string;

  @belongsTo(() => Challenge)
  challengeId: string;

  @hasMany(() => Classement)
  classements: Classement[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Souscription>) {
    super(data);
  }
}

export interface SouscriptionRelations {
  // describe navigational properties here
}

export type SouscriptionWithRelations = Souscription & SouscriptionRelations;
