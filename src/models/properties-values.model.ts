import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Properties} from './properties.model';
import {Souscription} from './souscription.model';

@model({settings: {strict: false}})
export class PropertiesValues extends Entity {
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

  @property({
    type: 'string',
  })
  value?: string;

  @belongsTo(() => Souscription)
  souscriptionId: string;

  @belongsTo(() => Properties)
  propertiesId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PropertiesValues>) {
    super(data);
  }
}

export interface PropertiesValuesRelations {
  // describe navigational properties here
}

export type PropertiesValuesWithRelations = PropertiesValues & PropertiesValuesRelations;
