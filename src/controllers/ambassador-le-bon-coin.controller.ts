import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  Ambassador,
  LeBonCoin
} from '../models';
import {AmbassadorRepository} from '../repositories';

export class AmbassadorLeBonCoinController {
  constructor(
    @repository(AmbassadorRepository) protected ambassadorRepository: AmbassadorRepository,
  ) { }

  @get('/ambassadors/{id}/le-bon-coin', {
    responses: {
      '200': {
        description: 'Ambassador has one LeBonCoin',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LeBonCoin),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<LeBonCoin>,
  ): Promise<LeBonCoin> {
    return this.ambassadorRepository.leBonCoin(id).get(filter);
  }

  @post('/ambassadors/{id}/le-bon-coin', {
    responses: {
      '200': {
        description: 'Ambassador model instance',
        content: {'application/json': {schema: getModelSchemaRef(LeBonCoin)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Ambassador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeBonCoin, {
            title: 'NewLeBonCoinInAmbassador',
            exclude: ['id'],
            optional: ['ambassadorId']
          }),
        },
      },
    }) leBonCoin: Omit<LeBonCoin, 'id'>,
  ): Promise<LeBonCoin> {
    return this.ambassadorRepository.leBonCoin(id).create(leBonCoin);
  }

  @patch('/ambassadors/{id}/le-bon-coin', {
    responses: {
      '200': {
        description: 'Ambassador.LeBonCoin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeBonCoin, {partial: true}),
        },
      },
    })
    leBonCoin: Partial<LeBonCoin>,
    @param.query.object('where', getWhereSchemaFor(LeBonCoin)) where?: Where<LeBonCoin>,
  ): Promise<Count> {
    return this.ambassadorRepository.leBonCoin(id).patch(leBonCoin, where);
  }

  @del('/ambassadors/{id}/le-bon-coin', {
    responses: {
      '200': {
        description: 'Ambassador.LeBonCoin DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(LeBonCoin)) where?: Where<LeBonCoin>,
  ): Promise<Count> {
    return this.ambassadorRepository.leBonCoin(id).delete(where);
  }
}
