import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Cell5G} from '../models';
import {Cell5GRepository} from '../repositories';

export class Cell5GController {
  constructor(
    @repository(Cell5GRepository)
    public cell5GRepository : Cell5GRepository,
  ) {}

  @post('/cell5gs')
  @response(200, {
    description: 'Cell5G model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cell5G)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell5G, {
            title: 'NewCell5G',
            exclude: ['id'],
          }),
        },
      },
    })
    cell5G: Omit<Cell5G, 'id'>,
  ): Promise<Cell5G> {
    return this.cell5GRepository.create(cell5G);
  }
  @get('/sites5gs/{band}')
  @response(200, {
    description: 'Array of 5G sites model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array'
        },
      },
    },
  })
  async getSites5Gs(
    @param.path.number('band') band: number,
  ): Promise<any[]> {
    let cell5Gs = await this.cell5GRepository.find();
    let sites: any[] = [];
    cell5Gs.forEach(cell => {
      let site = sites.find(s => s.nomSite == cell.nomSite)
      if (site) {
        site.cells.push({nomCellule: cell.nomCellule})
      } else {
        sites.push({nomSite: cell.nomSite,latitude: cell.latitude, longitude: cell.longitude, band:cell.band ,cells:[]})
      }
    });
    if (band == 0)
      return sites
    else
      return sites.filter(s => s.band === band)
  }
  @get('/cell5gs/count')
  @response(200, {
    description: 'Cell5G model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cell5G) where?: Where<Cell5G>,
  ): Promise<Count> {
    return this.cell5GRepository.count(where);
  }

  @get('/cell5gs')
  @response(200, {
    description: 'Array of Cell5G model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cell5G, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cell5G) filter?: Filter<Cell5G>,
  ): Promise<Cell5G[]> {
    return this.cell5GRepository.find(filter);
  }

  @patch('/cell5gs')
  @response(200, {
    description: 'Cell5G PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell5G, {partial: true}),
        },
      },
    })
    cell5G: Cell5G,
    @param.where(Cell5G) where?: Where<Cell5G>,
  ): Promise<Count> {
    return this.cell5GRepository.updateAll(cell5G, where);
  }

  @get('/cell5gs/{id}')
  @response(200, {
    description: 'Cell5G model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cell5G, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cell5G, {exclude: 'where'}) filter?: FilterExcludingWhere<Cell5G>
  ): Promise<Cell5G> {
    return this.cell5GRepository.findById(id, filter);
  }

  @patch('/cell5gs/{id}')
  @response(204, {
    description: 'Cell5G PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell5G, {partial: true}),
        },
      },
    })
    cell5G: Cell5G,
  ): Promise<void> {
    await this.cell5GRepository.updateById(id, cell5G);
  }

  @put('/cell5gs/{id}')
  @response(204, {
    description: 'Cell5G PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cell5G: Cell5G,
  ): Promise<void> {
    await this.cell5GRepository.replaceById(id, cell5G);
  }

  @del('/cell5gs/{id}')
  @response(204, {
    description: 'Cell5G DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cell5GRepository.deleteById(id);
  }
}
