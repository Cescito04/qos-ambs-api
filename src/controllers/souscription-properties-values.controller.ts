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
  Souscription,
  PropertiesValues,
} from '../models';
import {SouscriptionRepository} from '../repositories';

export class SouscriptionPropertiesValuesController {
  constructor(
    @repository(SouscriptionRepository) protected souscriptionRepository: SouscriptionRepository,
  ) { }

  @get('/souscriptions/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Array of Souscription has many PropertiesValues',
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
    return this.souscriptionRepository.propertiesValues(id).find(filter);
  }

  @post('/souscriptions/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Souscription model instance',
        content: {'application/json': {schema: getModelSchemaRef(PropertiesValues)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Souscription.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertiesValues, {
            title: 'NewPropertiesValuesInSouscription',
            exclude: ['id'],
            optional: ['souscriptionId']
          }),
        },
      },
    }) propertiesValues: Omit<PropertiesValues, 'id'>,
  ): Promise<PropertiesValues> {
    return this.souscriptionRepository.propertiesValues(id).create(propertiesValues);
  }

  @patch('/souscriptions/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Souscription.PropertiesValues PATCH success count',
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
    return this.souscriptionRepository.propertiesValues(id).patch(propertiesValues, where);
  }

  @del('/souscriptions/{id}/properties-values', {
    responses: {
      '200': {
        description: 'Souscription.PropertiesValues DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(PropertiesValues)) where?: Where<PropertiesValues>,
  ): Promise<Count> {
    return this.souscriptionRepository.propertiesValues(id).delete(where);
  }
}
