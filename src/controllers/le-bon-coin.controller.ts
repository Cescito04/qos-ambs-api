import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {LeBonCoin} from '../models';
import {LeBonCoinRepository} from '../repositories';

export class LeBonCoinController {
  constructor(
    @repository(LeBonCoinRepository)
    public leBonCoinRepository : LeBonCoinRepository,
  ) {}

  @post('/le-bon-coins')
  @response(200, {
    description: 'LeBonCoin model instance',
    content: {'application/json': {schema: getModelSchemaRef(LeBonCoin)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeBonCoin, {
            title: 'NewLeBonCoin',
            exclude: ['id'],
          }),
        },
      },
    })
    leBonCoin: Omit<LeBonCoin, 'id'>,
  ): Promise<LeBonCoin> {
    return this.leBonCoinRepository.create(leBonCoin);
  }

  @get('/le-bon-coins/count')
  @response(200, {
    description: 'LeBonCoin model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LeBonCoin) where?: Where<LeBonCoin>,
  ): Promise<Count> {
    return this.leBonCoinRepository.count(where);
  }

  @get('/le-bon-coins')
  @response(200, {
    description: 'Array of LeBonCoin model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LeBonCoin, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LeBonCoin) filter?: Filter<LeBonCoin>,
  ): Promise<LeBonCoin[]> {
    return this.leBonCoinRepository.find(filter);
  }

  @patch('/le-bon-coins')
  @response(200, {
    description: 'LeBonCoin PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeBonCoin, {partial: true}),
        },
      },
    })
    leBonCoin: LeBonCoin,
    @param.where(LeBonCoin) where?: Where<LeBonCoin>,
  ): Promise<Count> {
    return this.leBonCoinRepository.updateAll(leBonCoin, where);
  }

  @get('/le-bon-coins/{id}')
  @response(200, {
    description: 'LeBonCoin model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LeBonCoin, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(LeBonCoin, {exclude: 'where'}) filter?: FilterExcludingWhere<LeBonCoin>
  ): Promise<LeBonCoin> {
    return this.leBonCoinRepository.findById(id, filter);
  }

  @patch('/le-bon-coins/{id}')
  @response(204, {
    description: 'LeBonCoin PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeBonCoin, {partial: true}),
        },
      },
    })
    leBonCoin: LeBonCoin,
  ): Promise<void> {
    await this.leBonCoinRepository.updateById(id, leBonCoin);
  }

  @put('/le-bon-coins/{id}')
  @response(204, {
    description: 'LeBonCoin PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() leBonCoin: LeBonCoin,
  ): Promise<void> {
    await this.leBonCoinRepository.replaceById(id, leBonCoin);
  }

  @del('/le-bon-coins/{id}')
  @response(204, {
    description: 'LeBonCoin DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.leBonCoinRepository.deleteById(id);
  }
}
