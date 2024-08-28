import {Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {Classement} from './classement.model';
import {Properties} from './properties.model';
import {Souscription} from './souscription.model';
import {Zoning} from './zoning.model';

@model({settings: {strict: false}})
export class Challenge extends Entity {
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
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  date_debut: string;

  @property({
    type: 'date',
    required: true,

  })
  date_fin: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  techno?: string;

  @property({
    type: 'string',
  })
  statut?: string;

  @property({
    type: 'string',
  })
  zone?: string;


  @hasMany(() => Souscription)
  souscriptions: Souscription[];

  @hasMany(() => Properties)
  properties: Properties[];

  @hasMany(() => Classement)
  classements: Classement[];

  @hasOne(() => Zoning)
  zoning: Zoning;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Challenge>) {
    super(data);
  }
}

export interface ChallengeRelations {
  // describe navigational properties here
}

export type ChallengeWithRelations = Challenge & ChallengeRelations;
