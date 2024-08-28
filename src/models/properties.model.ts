import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Challenge} from './challenge.model';
import {PropertiesValues} from './properties-values.model';

@model({settings: {strict: false}})
export class Properties extends Entity {
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
  key: string;

  @property({
    type: 'string',
  })
  type?: string;

  @belongsTo(() => Challenge)
  challengeId: string;

  @hasMany(() => PropertiesValues)
  propertiesValues: PropertiesValues[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Properties>) {
    super(data);
  }
}

export interface PropertiesRelations {
  // describe navigational properties here
}

export type PropertiesWithRelations = Properties & PropertiesRelations;
