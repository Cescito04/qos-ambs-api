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
import {Cell2G} from '../models';
import {Cell2GRepository} from '../repositories';

export class Cell2GController {
  constructor(
    @repository(Cell2GRepository)
    public cell2GRepository : Cell2GRepository,
  ) {}

  @post('/cell2gs')
  @response(200, {
    description: 'Cell2G model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cell2G)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell2G, {
            title: 'NewCell2G',
            exclude: ['id'],
          }),
        },
      },
    })
    cell2G: Omit<Cell2G, 'id'>,
  ): Promise<Cell2G> {
    return this.cell2GRepository.create(cell2G);
  }

  @get('/cell2gs/count')
  @response(200, {
    description: 'Cell2G model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cell2G) where?: Where<Cell2G>,
  ): Promise<Count> {
    return this.cell2GRepository.count(where);
  }

  @get('/cell2gs')
  @response(200, {
    description: 'Array of Cell2G model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cell2G, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cell2G) filter?: Filter<Cell2G>,
  ): Promise<Cell2G[]> {
    return this.cell2GRepository.find(filter);
  }

 /*  @get('/sites2gs')
  @response(200, {
    description: 'Array of 2G sites model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array'
        },
      },
    },
  })
  async getSites2Gs(
  ): Promise<any[]> {
    let cell2Gs = await this.cell2GRepository.find();
    let sites: any[] = [];
    cell2Gs.forEach(cell => {
      let site = sites.find(s => s.nomSite == cell.nomSite)
      if (site) {
        site.cells.push({nomCellule: cell.nomCellule})
      } else {
        sites.push({nomSite: cell.nomSite,latitude: cell.latitude, longitude: cell.longitude, cells:[]})
      }
    });
    return sites
  }
 */
  @patch('/cell2gs')
  @response(200, {
    description: 'Cell2G PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell2G, {partial: true}),
        },
      },
    })
    cell2G: Cell2G,
    @param.where(Cell2G) where?: Where<Cell2G>,
  ): Promise<Count> {
    return this.cell2GRepository.updateAll(cell2G, where);
  }

  @get('/cell2gs/{id}')
  @response(200, {
    description: 'Cell2G model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cell2G, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cell2G, {exclude: 'where'}) filter?: FilterExcludingWhere<Cell2G>
  ): Promise<Cell2G> {
    return this.cell2GRepository.findById(id, filter);
  }

  @patch('/cell2gs/{id}')
  @response(204, {
    description: 'Cell2G PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cell2G, {partial: true}),
        },
      },
    })
    cell2G: Cell2G,
  ): Promise<void> {
    await this.cell2GRepository.updateById(id, cell2G);
  }

  @put('/cell2gs/{id}')
  @response(204, {
    description: 'Cell2G PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cell2G: Cell2G,
  ): Promise<void> {
    await this.cell2GRepository.replaceById(id, cell2G);
  }

  @del('/cell2gs/{id}')
  @response(204, {
    description: 'Cell2G DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cell2GRepository.deleteById(id);
  }
}
