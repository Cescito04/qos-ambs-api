import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Challenge} from './challenge.model';

@model({settings: {strict: false}})
export class Zoning extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'object',
    required: true,
  })
  attributes: {
    FID: number;
    CODE: number;
    NOM: string;
    THEME: string;
    PAYS: string;
    IDUU: string;
    SUM_SUPERF: number;
    Shape_Leng: number;
    Shape_Le_1: number;
    Shape_Area: number;
    Shape__Area: number;
    Shape__Length: number;
  };

  @property({
    type: 'object',

  })
  geometry: {
    rings?: number[][][];
  };

  @belongsTo(() => Challenge)
  challengeId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Zoning>) {
    super(data);
  }
}

export interface ZoningRelations {
  // describe navigational properties here
}

export type ZoningWithRelations = Zoning & ZoningRelations;
