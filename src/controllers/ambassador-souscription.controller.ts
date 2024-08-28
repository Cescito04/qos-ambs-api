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
  Ambassador,
  Souscription,
} from '../models';
import {AmbassadorRepository} from '../repositories';

export class AmbassadorSouscriptionController {
  constructor(
    @repository(AmbassadorRepository) protected ambassadorRepository: AmbassadorRepository,
  ) { }

  @get('/ambassadors/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Array of Ambassador has many Souscription',
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
    return this.ambassadorRepository.souscriptions(id).find(filter);
  }

  @post('/ambassadors/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Ambassador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Souscription)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Ambassador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Souscription, {
            title: 'NewSouscriptionInAmbassador',
            exclude: ['id'],
            optional: ['ambassadorId']
          }),
        },
      },
    }) souscription: Omit<Souscription, 'id'>,
  ): Promise<Souscription> {
    return this.ambassadorRepository.souscriptions(id).create(souscription);
  }

  @patch('/ambassadors/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Ambassador.Souscription PATCH success count',
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
    return this.ambassadorRepository.souscriptions(id).patch(souscription, where);
  }

  @del('/ambassadors/{id}/souscriptions', {
    responses: {
      '200': {
        description: 'Ambassador.Souscription DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Souscription)) where?: Where<Souscription>,
  ): Promise<Count> {
    return this.ambassadorRepository.souscriptions(id).delete(where);
  }
}
