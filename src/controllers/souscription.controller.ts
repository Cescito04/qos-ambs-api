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
import {Souscription} from '../models';
import {SouscriptionRepository} from '../repositories';

export class SouscriptionController {
  constructor(
    @repository(SouscriptionRepository)
    public souscriptionRepository : SouscriptionRepository,
  ) {}

  @post('/souscriptions')
  @response(200, {
    description: 'Souscription model instance',
    content: {'application/json': {schema: getModelSchemaRef(Souscription)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Souscription, {
            title: 'NewSouscription',
            exclude: ['id'],
          }),
        },
      },
    })
    souscription: Omit<Souscription, 'id'>,
  ): Promise<Souscription> {
    return this.souscriptionRepository.create(souscription);
  }

  @get('/souscriptions/count')
  @response(200, {
    description: 'Souscription model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Souscription) where?: Where<Souscription>,
  ): Promise<Count> {
    return this.souscriptionRepository.count(where);
  }

  @get('/souscriptions')
  @response(200, {
    description: 'Array of Souscription model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Souscription, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Souscription) filter?: Filter<Souscription>,
  ): Promise<Souscription[]> {
    return this.souscriptionRepository.find(filter);
  }

  @patch('/souscriptions')
  @response(200, {
    description: 'Souscription PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Souscription, {partial: true}),
        },
      },
    })
    souscription: Souscription,
    @param.where(Souscription) where?: Where<Souscription>,
  ): Promise<Count> {
    return this.souscriptionRepository.updateAll(souscription, where);
  }

  @get('/souscriptions/{id}')
  @response(200, {
    description: 'Souscription model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Souscription, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Souscription, {exclude: 'where'}) filter?: FilterExcludingWhere<Souscription>
  ): Promise<Souscription> {
    return this.souscriptionRepository.findById(id, filter);
  }

  @patch('/souscriptions/{id}')
  @response(204, {
    description: 'Souscription PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Souscription, {partial: true}),
        },
      },
    })
    souscription: Souscription,
  ): Promise<void> {
    await this.souscriptionRepository.updateById(id, souscription);
  }

  @put('/souscriptions/{id}')
  @response(204, {
    description: 'Souscription PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() souscription: Souscription,
  ): Promise<void> {
    await this.souscriptionRepository.replaceById(id, souscription);
  }

  @del('/souscriptions/{id}')
  @response(204, {
    description: 'Souscription DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.souscriptionRepository.deleteById(id);
  }
}
