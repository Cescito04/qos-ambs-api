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
  Classement,
} from '../models';
import {SouscriptionRepository} from '../repositories';

export class SouscriptionClassementController {
  constructor(
    @repository(SouscriptionRepository) protected souscriptionRepository: SouscriptionRepository,
  ) { }

  @get('/souscriptions/{id}/classements', {
    responses: {
      '200': {
        description: 'Array of Souscription has many Classement',
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
    return this.souscriptionRepository.classements(id).find(filter);
  }

  @post('/souscriptions/{id}/classements', {
    responses: {
      '200': {
        description: 'Souscription model instance',
        content: {'application/json': {schema: getModelSchemaRef(Classement)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Souscription.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classement, {
            title: 'NewClassementInSouscription',
            exclude: ['id'],
            optional: ['souscriptionId']
          }),
        },
      },
    }) classement: Omit<Classement, 'id'>,
  ): Promise<Classement> {
    return this.souscriptionRepository.classements(id).create(classement);
  }

  @patch('/souscriptions/{id}/classements', {
    responses: {
      '200': {
        description: 'Souscription.Classement PATCH success count',
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
    return this.souscriptionRepository.classements(id).patch(classement, where);
  }

  @del('/souscriptions/{id}/classements', {
    responses: {
      '200': {
        description: 'Souscription.Classement DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Classement)) where?: Where<Classement>,
  ): Promise<Count> {
    return this.souscriptionRepository.classements(id).delete(where);
  }
}
