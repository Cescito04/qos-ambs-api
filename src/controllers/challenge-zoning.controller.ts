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
  Zoning,
} from '../models';
import {ChallengeRepository} from '../repositories';

export class ChallengeZoningController {
  constructor(
    @repository(ChallengeRepository) protected challengeRepository: ChallengeRepository,
  ) { }

  @get('/challenges/{id}/zoning', {
    responses: {
      '200': {
        description: 'Challenge has one Zoning',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Zoning),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Zoning>,
  ): Promise<Zoning> {
    return this.challengeRepository.zoning(id).get(filter);
  }

  @post('/challenges/{id}/zoning', {
    responses: {
      '200': {
        description: 'Challenge model instance',
        content: {'application/json': {schema: getModelSchemaRef(Zoning)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Challenge.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zoning, {
            title: 'NewZoningInChallenge',
            exclude: ['id'],
            optional: ['challengeId']
          }),
        },
      },
    }) zoning: Omit<Zoning, 'id'>,
  ): Promise<Zoning> {
    return this.challengeRepository.zoning(id).create(zoning);
  }

  @patch('/challenges/{id}/zoning', {
    responses: {
      '200': {
        description: 'Challenge.Zoning PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zoning, {partial: true}),
        },
      },
    })
    zoning: Partial<Zoning>,
    @param.query.object('where', getWhereSchemaFor(Zoning)) where?: Where<Zoning>,
  ): Promise<Count> {
    return this.challengeRepository.zoning(id).patch(zoning, where);
  }

  @del('/challenges/{id}/zoning', {
    responses: {
      '200': {
        description: 'Challenge.Zoning DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Zoning)) where?: Where<Zoning>,
  ): Promise<Count> {
    return this.challengeRepository.zoning(id).delete(where);
  }
}
