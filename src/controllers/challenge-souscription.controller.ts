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
  Souscription,
} from '../models';
import {ChallengeRepository} from '../repositories';

export class ChallengeSouscriptionController {
  constructor(
    @repository(ChallengeRepository) protected challengeRepository: ChallengeRepository,
  ) { }

  @get('/challenges/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Array of Challenge has many Souscription',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Souscription)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Souscription>,
  ): Promise<Souscription[]> {
    return this.challengeRepository.souscriptions(id).find(filter);
  }

  @post('/challenges/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Challenge model instance',
        content: {'application/json': {schema: getModelSchemaRef(Souscription)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Challenge.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Souscription, {
            title: 'NewSouscriptionInChallenge',
            exclude: ['id'],
            optional: ['challengeId']
          }),
        },
      },
    }) souscription: Omit<Souscription, 'id'>,
  ): Promise<Souscription> {
    return this.challengeRepository.souscriptions(id).create(souscription);
  }

  @patch('/challenges/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Challenge.Souscription PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Souscription, {partial: true}),
        },
      },
    })
    souscription: Partial<Souscription>,
    @param.query.object('where', getWhereSchemaFor(Souscription)) where?: Where<Souscription>,
  ): Promise<Count> {
    return this.challengeRepository.souscriptions(id).patch(souscription, where);
  }

  @del('/challenges/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Challenge.Souscription DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Souscription)) where?: Where<Souscription>,
  ): Promise<Count> {
    return this.challengeRepository.souscriptions(id).delete(where);
  }
}
