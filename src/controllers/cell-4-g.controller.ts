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
import {Cell4G} from '../models';
import {Cell4GRepository} from '../repositories';

export class Cell4GController {
  constructor(
    @repository(Cell4GRepository)
    public cell4GRepository : Cell4GRepository,
  ) {}

  @post('/cell4gs')
  @response(200, {
    description: 'Cell4G model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cell4G)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell4G, {
            title: 'NewCell4G',
            exclude: ['id'],
          }),
        },
      },
    })
    cell4G: Omit<Cell4G, 'id'>,
  ): Promise<Cell4G> {
    return this.cell4GRepository.create(cell4G);
  }

  @get('/cell4gs/count')
  @response(200, {
    description: 'Cell4G model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cell4G) where?: Where<Cell4G>,
  ): Promise<Count> {
    return this.cell4GRepository.count(where);
  }

  @get('/cell4gs')
  @response(200, {
    description: 'Array of Cell4G model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cell4G, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cell4G) filter?: Filter<Cell4G>,
  ): Promise<Cell4G[]> {
    return this.cell4GRepository.find(filter);
  }

  @patch('/cell4gs')
  @response(200, {
    description: 'Cell4G PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell4G, {partial: true}),
        },
      },
    })
    cell4G: Cell4G,
    @param.where(Cell4G) where?: Where<Cell4G>,
  ): Promise<Count> {
    return this.cell4GRepository.updateAll(cell4G, where);
  }

  @get('/cell4gs/{id}')
  @response(200, {
    description: 'Cell4G model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cell4G, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cell4G, {exclude: 'where'}) filter?: FilterExcludingWhere<Cell4G>
  ): Promise<Cell4G> {
    return this.cell4GRepository.findById(id, filter);
  }

  @patch('/cell4gs/{id}')
  @response(204, {
    description: 'Cell4G PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell4G, {partial: true}),
        },
      },
    })
    cell4G: Cell4G,
  ): Promise<void> {
    await this.cell4GRepository.updateById(id, cell4G);
  }

  @put('/cell4gs/{id}')
  @response(204, {
    description: 'Cell4G PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cell4G: Cell4G,
  ): Promise<void> {
    await this.cell4GRepository.replaceById(id, cell4G);
  }

  @del('/cell4gs/{id}')
  @response(204, {
    description: 'Cell4G DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cell4GRepository.deleteById(id);
  }
}
