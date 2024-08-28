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
  Classement,
} from '../models';
import {ChallengeRepository} from '../repositories';

export class ChallengeClassementController {
  constructor(
    @repository(ChallengeRepository) protected challengeRepository: ChallengeRepository,
  ) { }

  @get('/challenges/{id}/classements', {
    responses: {
      '200': {
        description: 'Array of Challenge has many Classement',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Classement)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Classement>,
  ): Promise<Classement[]> {
    return this.challengeRepository.classements(id).find(filter);
  }

  @post('/challenges/{id}/classements', {
    responses: {
      '200': {
        description: 'Challenge model instance',
        content: {'application/json': {schema: getModelSchemaRef(Classement)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Challenge.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classement, {
            title: 'NewClassementInChallenge',
            exclude: ['id'],
            optional: ['challengeId']
          }),
        },
      },
    }) classement: Omit<Classement, 'id'>,
  ): Promise<Classement> {
    return this.challengeRepository.classements(id).create(classement);
  }

  @patch('/challenges/{id}/classements', {
    responses: {
      '200': {
        description: 'Challenge.Classement PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classement, {partial: true}),
        },
      },
    })
    classement: Partial<Classement>,
    @param.query.object('where', getWhereSchemaFor(Classement)) where?: Where<Classement>,
  ): Promise<Count> {
    return this.challengeRepository.classements(id).patch(classement, where);
  }

  @del('/challenges/{id}/classements', {
    responses: {
      '200': {
        description: 'Challenge.Classement DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Classement)) where?: Where<Classement>,
  ): Promise<Count> {
    return this.challengeRepository.classements(id).delete(where);
  }
}
