import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Challenge} from './challenge.model';
import {Souscription} from './souscription.model';

@model({settings: {strict: false}})
export class Classement extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  score: number;

  @belongsTo(() => Challenge)
  challengeId: string;

  @belongsTo(() => Souscription)
  souscriptionId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Classement>) {
    super(data);
  }
}

export interface ClassementRelations {
  // describe navigational properties here
}

export type ClassementWithRelations = Classement & ClassementRelations;
