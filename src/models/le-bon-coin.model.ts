import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class LeBonCoin extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  dl: number;

  @property({
    type: 'number',
    required: true,
  })
  ul: number;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  ambassadorId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LeBonCoin>) {
    super(data);
  }
}

export interface LeBonCoinRelations {
  // describe navigational properties here
}

export type LeBonCoinWithRelations = LeBonCoin & LeBonCoinRelations;
