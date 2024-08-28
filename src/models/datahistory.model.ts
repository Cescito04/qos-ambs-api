import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})

export class Datahistory extends Entity {
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
  type: string;

  @property({
    type: 'number',
    required: true,
  })
  ping: number;

  @property({
    type: 'number',
    required: true,
  })
  download: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  upload: number;

  @property({
    type: 'number',
    required: true,
  })
  latitude: number;

  @property({
    type: 'number',
    required: true,
  })
  longitude: number;

  @property({
    type: 'number',
  })
  ulmin?: number;

  @property({
    type: 'number',
  })
  dlmin?: number;

  @property({
    type: 'boolean',
  })
  success?: boolean;

  @property({
    type: 'string',
  })
  ambassadorId?: string;

  @property({
    type: 'string',
  })
  cellule?: string;

  @property({
    type: 'number',
  })
  PCI?: number;

  @property({
    type: 'number',
  })
  RSRP?: number;

  @property({
    type: 'number',
  })
  RSRQ?: number;

  @property({
    type: 'number',
  })
  Band?: number;

  @property({
    type: 'number',
  })
  ARFCN?: number;

  @property({
    type: 'number',
  })
  DLFrequence?: number;

  @property({
    type: 'number',
  })
  BandNumber?: number;

  @property({
    type: 'number',
  })
  BandName?: number;

  @property({
    type: 'number',
  })
  ChannelNumber?: number;

  @property({
    type: 'number',
  })
  TAC?: number;

  @property({
    type: 'number',
  })
  NCI?: number;

  @property({
    type: 'number',
  })
  DBM?: number;

  @property({
    type: 'number',
  })
  CSIRSRQ?: number;

  @property({
    type: 'number',
  })
  CSISINR?: number;

  @property({
    type: 'number',
  })
  SSRSRP?: number;

  @property({
    type: 'number',
  })
  SSRSRQ?: number;

  @property({
    type: 'number',
  })
  SSSINR?: number;

  @property({
    type: 'number',
  })
  SSRSRPASU?: number;


  @property({
    type: 'number',
  })
  eCGI?: number;

  @property({
    type: 'number',
  })
  CID_8b?: number;

  @property({
    type: 'number',
  })
  eNb?: number;

  @property({
    type: 'number',
  })
  RSSI?: number;

  @property({
    type: 'number',
  })
  CQI?: number;

  @property({
    type: 'number',
  })
  SNR?: number;

  @property({
    type: 'number',
  })
  TA?: number;

  @property({
    type: 'number',
  })
  Bandwidth?: number;

  @property({
    type: 'number',
  })
  CID?: number;

  @property({
    type: 'number',
  })
  LAC?: number;

  @property({
    type: 'number',
  })
  PSC?: number;

  @property({
    type: 'number',
  })
  DARFCN?: number;

  @property({
    type: 'number',
  })
  RNC?: number;

  @property({
    type: 'number',
  })
  CGI?: number;

  @property({
    type: 'number',
  })
  CI?: number;

  @property({
    type: 'number',
  })
  RSSIASU?: number;

  @property({
    type: 'number',
  })
  dbm?: number;

  @property({
    type: 'number',
  })
  ECIO?: number;

  @property({
    type: 'number',
  })
  RSCP?: number;

  @property({
    type: 'number',
  })
  RSCPASU?: number;

  @property({
    type: 'number',
  })
  ulmoy?: number;

  @property({
    type: 'number',
  })
  dlmoy?: number;

  @property({
    type: 'number',
  })
  ulmax?: number;

  @property({
    type: 'number',
  })
  dlmax?: number;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Datahistory>) {
    super(data);
  }
}

export interface DatahistoryRelations {
  // describe navigational properties here
}

export type DatahistoryWithRelations = Datahistory & DatahistoryRelations;
