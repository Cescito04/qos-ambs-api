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
import {PropertiesValues} from '../models';
import {PropertiesValuesRepository} from '../repositories';

export class PropertiesValuesController {
  constructor(
    @repository(PropertiesValuesRepository)
    public propertiesValuesRepository : PropertiesValuesRepository,
  ) {}

  @post('/properties-values')
  @response(200, {
    description: 'PropertiesValues model instance',
    content: {'application/json': {schema: getModelSchemaRef(PropertiesValues)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertiesValues, {
            title: 'NewPropertiesValues',
            exclude: ['id'],
          }),
        },
      },
    })
    propertiesValues: Omit<PropertiesValues, 'id'>,
  ): Promise<PropertiesValues> {
    return this.propertiesValuesRepository.create(propertiesValues);
  }

  @get('/properties-values/count')
  @response(200, {
    description: 'PropertiesValues model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PropertiesValues) where?: Where<PropertiesValues>,
  ): Promise<Count> {
    return this.propertiesValuesRepository.count(where);
  }

  @get('/properties-values')
  @response(200, {
    description: 'Array of PropertiesValues model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PropertiesValues, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PropertiesValues) filter?: Filter<PropertiesValues>,
  ): Promise<PropertiesValues[]> {
    return this.propertiesValuesRepository.find(filter);
  }

  @patch('/properties-values')
  @response(200, {
    description: 'PropertiesValues PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertiesValues, {partial: true}),
        },
      },
    })
    propertiesValues: PropertiesValues,
    @param.where(PropertiesValues) where?: Where<PropertiesValues>,
  ): Promise<Count> {
    return this.propertiesValuesRepository.updateAll(propertiesValues, where);
  }

  @get('/properties-values/{id}')
  @response(200, {
    description: 'PropertiesValues model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PropertiesValues, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PropertiesValues, {exclude: 'where'}) filter?: FilterExcludingWhere<PropertiesValues>
  ): Promise<PropertiesValues> {
    return this.propertiesValuesRepository.findById(id, filter);
  }

  @patch('/properties-values/{id}')
  @response(204, {
    description: 'PropertiesValues PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertiesValues, {partial: true}),
        },
      },
    })
    propertiesValues: PropertiesValues,
  ): Promise<void> {
    await this.propertiesValuesRepository.updateById(id, propertiesValues);
  }

  @put('/properties-values/{id}')
  @response(204, {
    description: 'PropertiesValues PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() propertiesValues: PropertiesValues,
  ): Promise<void> {
    await this.propertiesValuesRepository.replaceById(id, propertiesValues);
  }

  @del('/properties-values/{id}')
  @response(204, {
    description: 'PropertiesValues DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.propertiesValuesRepository.deleteById(id);
  }
}
