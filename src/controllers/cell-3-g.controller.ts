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
import {Cell3G} from '../models';
import {Cell3GRepository} from '../repositories';

export class Cell3GController {
  constructor(
    @repository(Cell3GRepository)
    public cell3GRepository : Cell3GRepository,
  ) {}

  @post('/cell3gs')
  @response(200, {
    description: 'Cell3G model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cell3G)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell3G, {
            title: 'NewCell3G',
            exclude: ['id'],
          }),
        },
      },
    })
    cell3G: Omit<Cell3G, 'id'>,
  ): Promise<Cell3G> {
    return this.cell3GRepository.create(cell3G);
  }

  @get('/cell3gs/count')
  @response(200, {
    description: 'Cell3G model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cell3G) where?: Where<Cell3G>,
  ): Promise<Count> {
    return this.cell3GRepository.count(where);
  }

  @get('/cell3gs')
  @response(200, {
    description: 'Array of Cell3G model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cell3G, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cell3G) filter?: Filter<Cell3G>,
  ): Promise<Cell3G[]> {
    return this.cell3GRepository.find(filter);
  }

  @patch('/cell3gs')
  @response(200, {
    description: 'Cell3G PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell3G, {partial: true}),
        },
      },
    })
    cell3G: Cell3G,
    @param.where(Cell3G) where?: Where<Cell3G>,
  ): Promise<Count> {
    return this.cell3GRepository.updateAll(cell3G, where);
  }

  @get('/cell3gs/{id}')
  @response(200, {
    description: 'Cell3G model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cell3G, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cell3G, {exclude: 'where'}) filter?: FilterExcludingWhere<Cell3G>
  ): Promise<Cell3G> {
    return this.cell3GRepository.findById(id, filter);
  }

  @patch('/cell3gs/{id}')
  @response(204, {
    description: 'Cell3G PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell3G, {partial: true}),
        },
      },
    })
    cell3G: Cell3G,
  ): Promise<void> {
    await this.cell3GRepository.updateById(id, cell3G);
  }

  @put('/cell3gs/{id}')
  @response(204, {
    description: 'Cell3G PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cell3G: Cell3G,
  ): Promise<void> {
    await this.cell3GRepository.replaceById(id, cell3G);
  }

  @del('/cell3gs/{id}')
  @response(204, {
    description: 'Cell3G DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cell3GRepository.deleteById(id);
  }
}
