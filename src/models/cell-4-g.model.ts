import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cell4G extends Entity {
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
  enodeBId: number;

  @property({
    type: 'number',
    required: true,
  })
  localCellId: number;

  @property({
    type: 'number',
    required: true,
  })
  Cid: number;

  @property({
    type: 'number',
    required: true,
  })
  tac: number;

  @property({
    type: 'number',
    required: true,
  })
  physicalCellId: number;

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

  constructor(data?: Partial<Cell4G>) {
    super(data);
  }
}

export interface Cell4GRelations {
  // describe navigational properties here
}

export type Cell4GWithRelations = Cell4G & Cell4GRelations;
