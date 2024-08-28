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
  Challenge,
  Properties,
} from '../models';
import {ChallengeRepository} from '../repositories';

export class ChallengePropertiesController {
  constructor(
    @repository(ChallengeRepository) protected challengeRepository: ChallengeRepository,
  ) { }

  @get('/challenges/{id}/properties', {
    responses: {
      '200': {
        description: 'Array of Challenge has many Properties',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Properties)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Properties>,
  ): Promise<Properties[]> {
    return this.challengeRepository.properties(id).find(filter);
  }

  @post('/challenges/{id}/properties', {
    responses: {
      '200': {
        description: 'Challenge model instance',
        content: {'application/json': {schema: getModelSchemaRef(Properties)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Challenge.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Properties, {
            title: 'NewPropertiesInChallenge',
            exclude: ['id'],
            optional: ['challengeId']
          }),
        },
      },
    }) properties: Omit<Properties, 'id'>,
  ): Promise<Properties> {
    return this.challengeRepository.properties(id).create(properties);
  }

  @patch('/challenges/{id}/properties', {
    responses: {
      '200': {
        description: 'Challenge.Properties PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Properties, {partial: true}),
        },
      },
    })
    properties: Partial<Properties>,
    @param.query.object('where', getWhereSchemaFor(Properties)) where?: Where<Properties>,
  ): Promise<Count> {
    return this.challengeRepository.properties(id).patch(properties, where);
  }

  @del('/challenges/{id}/properties', {
    responses: {
      '200': {
        description: 'Challenge.Properties DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Properties)) where?: Where<Properties>,
  ): Promise<Count> {
    return this.challengeRepository.properties(id).delete(where);
  }
}
