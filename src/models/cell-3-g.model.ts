import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cell3G extends Entity {
  // Define well-known properties here
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
  nomSite: string;

  @property({
    type: 'string',
    required: true,
  })
  nomCellule: string;

  @property({
    type: 'number',
    required: true,
  })
  cellId: number;

  @property({
    type: 'number',
    required: true,
  })
  lac: number;

  @property({
    type: 'string',
    required: true,
  })
  rac: string;

  @property({
    type: 'string',
  })
  latitude?: string;

  @property({
    type: 'string',
  })
  longitude?: string;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cell3G>) {
    super(data);
  }
}

export interface Cell3GRelations {
  // describe navigational properties here
}

export type Cell3GWithRelations = Cell3G & Cell3GRelations;
