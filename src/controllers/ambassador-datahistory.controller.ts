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
  Datahistory,
} from '../models';
import {AmbassadorRepository} from '../repositories';

export class AmbassadorDatahistoryController {
  constructor(
    @repository(AmbassadorRepository) protected ambassadorRepository: AmbassadorRepository,
  ) { }

  @get('/ambassadors/{id}/datahistories', {
    responses: {
      '200': {
        description: 'Array of Ambassador has many Datahistory',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Datahistory)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Datahistory>,
  ): Promise<Datahistory[]> {
    return this.ambassadorRepository.datahistories(id).find(filter);
  }

  @post('/ambassadors/{id}/datahistories', {
    responses: {
      '200': {
        description: 'Ambassador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Datahistory)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Ambassador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datahistory, {
            title: 'NewDatahistoryInAmbassador',
            exclude: ['id'],
            optional: ['ambassadorId']
          }),
        },
      },
    }) datahistory: Omit<Datahistory, 'id'>,
  ): Promise<Datahistory> {
    return this.ambassadorRepository.datahistories(id).create(datahistory);
  }

  @patch('/ambassadors/{id}/datahistories', {
    responses: {
      '200': {
        description: 'Ambassador.Datahistory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datahistory, {partial: true}),
        },
      },
    })
    datahistory: Partial<Datahistory>,
    @param.query.object('where', getWhereSchemaFor(Datahistory)) where?: Where<Datahistory>,
  ): Promise<Count> {
    return this.ambassadorRepository.datahistories(id).patch(datahistory, where);
  }

  @del('/ambassadors/{id}/datahistories', {
    responses: {
      '200': {
        description: 'Ambassador.Datahistory DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Datahistory)) where?: Where<Datahistory>,
  ): Promise<Count> {
    return this.ambassadorRepository.datahistories(id).delete(where);
  }
}
