import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cell5G extends Entity {
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
  tac: number;

  @property({
    type: 'number',
    required: true,
  })
  band: number;

  @property({
    type: 'number',
    required: true,
  })
  physicalCellId: number;

  @property({
    type: 'number',
    required: true,
  })
  logicalRootSequenceIndex: number;

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

  constructor(data?: Partial<Cell5G>) {
    super(data);
  }
}

export interface Cell5GRelations {
  // describe navigational properties here
}

export type Cell5GWithRelations = Cell5G & Cell5GRelations;
