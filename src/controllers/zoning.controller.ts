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
import {Zoning} from '../models';
import {ZoningRepository} from '../repositories';

export class ZoningController {
  constructor(
    @repository(ZoningRepository)
    public zoningRepository : ZoningRepository,
  ) {}

  @post('/zonings')
  @response(200, {
    description: 'Zoning model instance',
    content: {'application/json': {schema: getModelSchemaRef(Zoning)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zoning, {
            title: 'NewZoning',
            exclude: ['id'],
          }),
        },
      },
    })
    zoning: Omit<Zoning, 'id'>,
  ): Promise<Zoning> {
    return this.zoningRepository.create(zoning);
  }

  @get('/zonings/count')
  @response(200, {
    description: 'Zoning model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Zoning) where?: Where<Zoning>,
  ): Promise<Count> {
    return this.zoningRepository.count(where);
  }

  @get('/zonings')
  @response(200, {
    description: 'Array of Zoning model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Zoning, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Zoning) filter?: Filter<Zoning>,
  ): Promise<Zoning[]> {
    return this.zoningRepository.find(filter);
  }

  @patch('/zonings')
  @response(200, {
    description: 'Zoning PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zoning, {partial: true}),
        },
      },
    })
    zoning: Zoning,
    @param.where(Zoning) where?: Where<Zoning>,
  ): Promise<Count> {
    return this.zoningRepository.updateAll(zoning, where);
  }

  @get('/zonings/{id}')
  @response(200, {
    description: 'Zoning model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Zoning, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Zoning, {exclude: 'where'}) filter?: FilterExcludingWhere<Zoning>
  ): Promise<Zoning> {
    return this.zoningRepository.findById(id, filter);
  }

  @patch('/zonings/{id}')
  @response(204, {
    description: 'Zoning PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zoning, {partial: true}),
        },
      },
    })
    zoning: Zoning,
  ): Promise<void> {
    await this.zoningRepository.updateById(id, zoning);
  }

  @put('/zonings/{id}')
  @response(204, {
    description: 'Zoning PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() zoning: Zoning,
  ): Promise<void> {
    await this.zoningRepository.replaceById(id, zoning);
  }

  @del('/zonings/{id}')
  @response(204, {
    description: 'Zoning DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.zoningRepository.deleteById(id);
  }
}
