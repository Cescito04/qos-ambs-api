import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cell2G extends Entity {
  // Define well-known properties here
  @property({
    type: 'string',
    required: true,
  })
  nomSite: string;

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
  nomCellule: string;

  @property({
    type: 'number',
    required: true,
  })
  lac: number;

  @property({
    type: 'number',
    required: true,
  })
  rac: number;

  @property({
    type: 'number',
    required: true,
  })
  ci: number;

  @property({
    type: 'string',
  })
  longitude?: string;

  @property({
    type: 'string',
  })
  latitude?: string;
  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cell2G>) {
    super(data);
  }
}

export interface Cell2GRelations {
  // describe navigational properties here
}

export type Cell2GWithRelations = Cell2G & Cell2GRelations;
