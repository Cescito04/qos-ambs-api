import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Properties,
  PropertiesValues,
} from '../models';
import {PropertiesRepository} from '../repositories';

export class PropertiesPropertiesValuesController {
  constructor(
    @repository(PropertiesRepository) protected propertiesRepository: PropertiesRepository,
  ) { }

  @get('/properties/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Array of Properties has many PropertiesValues',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PropertiesValues)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<PropertiesValues>,
  ): Promise<PropertiesValues[]> {
    return this.propertiesRepository.propertiesValues(id).find(filter);
  }

  @post('/properties/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Properties model instance',
        content: {'application/json': {schema: getModelSchemaRef(PropertiesValues)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Properties.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertiesValues, {
            title: 'NewPropertiesValuesInProperties',
            exclude: ['id'],
            optional: ['propertiesId']
          }),
        },
      },
    }) propertiesValues: Omit<PropertiesValues, 'id'>,
  ): Promise<PropertiesValues> {
    return this.propertiesRepository.propertiesValues(id).create(propertiesValues);
  }

  @patch('/properties/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Properties.PropertiesValues PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertiesValues, {partial: true}),
        },
      },
    })
    propertiesValues: Partial<PropertiesValues>,
    @param.query.object('where', getWhereSchemaFor(PropertiesValues)) where?: Where<PropertiesValues>,
  ): Promise<Count> {
    return this.propertiesRepository.propertiesValues(id).patch(propertiesValues, where);
  }

  @del('/properties/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Properties.PropertiesValues DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(PropertiesValues)) where?: Where<PropertiesValues>,
  ): Promise<Count> {
    return this.propertiesRepository.propertiesValues(id).delete(where);
  }
}
