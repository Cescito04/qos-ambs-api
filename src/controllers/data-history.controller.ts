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
import {Ambassador, Datahistory} from '../models';
import {AmbassadorRepository, DatahistoryRepository} from '../repositories';

export class DataHistoryController {
  constructor(
    @repository(DatahistoryRepository)
    public datahistoryRepository: DatahistoryRepository,
    @repository(AmbassadorRepository)
    public ambassadorRepository: AmbassadorRepository,
  ) { }

  @post('/datahistories')
  @response(200, {
    description: 'Datahistory model instance',
    content: {'application/json': {schema: getModelSchemaRef(Datahistory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datahistory, {
            title: 'NewDatahistory',
            exclude: ['id'],
          }),
        },
      },
    })
    datahistory: Omit<Datahistory, 'id'>,
  ): Promise<Datahistory> {
    return this.datahistoryRepository.create(datahistory);
  }

  @get('/datahistories/count')
  @response(200, {
    description: 'Datahistory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Datahistory) where?: Where<Datahistory>,
  ): Promise<Count> {
    return this.datahistoryRepository.count(where);
  }

  @get('/datahistories')
  @response(200, {
    description: 'Array of Datahistory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Datahistory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Datahistory) filter?: Filter<Datahistory>,
  ): Promise<Datahistory[]> {
    return this.datahistoryRepository.find(filter);
  }

  @patch('/datahistories')
  @response(200, {
    description: 'Datahistory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datahistory, {partial: true}),
        },
      },
    })
    datahistory: Datahistory,
    @param.where(Datahistory) where?: Where<Datahistory>,
  ): Promise<Count> {
    return this.datahistoryRepository.updateAll(datahistory, where);
  }

  @get('/datahistories/{id}')
  @response(200, {
    description: 'Datahistory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Datahistory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Datahistory, {exclude: 'where'}) filter?: FilterExcludingWhere<Datahistory>
  ): Promise<Datahistory> {
    return this.datahistoryRepository.findById(id, filter);
  }

  @patch('/datahistories/{id}')
  @response(204, {
    description: 'Datahistory PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datahistory, {partial: true}),
        },
      },
    })
    datahistory: Datahistory,
  ): Promise<void> {
    await this.datahistoryRepository.updateById(id, datahistory);
  }

  @put('/datahistories/{id}')
  @response(204, {
    description: 'Datahistory PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() datahistory: Datahistory,
  ): Promise<void> {
    await this.datahistoryRepository.replaceById(id, datahistory);
  }

  @del('/datahistories/{id}')
  @response(204, {
    description: 'Datahistory DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.datahistoryRepository.deleteById(id);
  }

  @get('/datahistories/debit-moyen/{ambassadorId}/{technology}')
  @response(200, {
    description: 'Average download and upload speed for a given ambassador by technology',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            nom: {type: 'string'},
            prenom: {type: 'string'},
            technologies: {
              type: 'object',
              properties: {
                dlAvg: {type: 'number'},
                ulAvg: {type: 'number'},
                debit: {type: 'number'},
                testCount: {type: 'number'},
              },
            },
          },
        },
      },
    },
  })
  async getAverageSpeed(
    @param.path.string('ambassadorId') ambassadorId: string,
    @param.path.string('technology') technology: string,
  ): Promise<any> {

    const ambassador: Ambassador | null = await this.ambassadorRepository.findById(ambassadorId);

    if (!ambassador) {
      throw new Error('Ambassador not found');
    }

    const datahistories = await this.datahistoryRepository.find({
      where: {ambassadorId, techno: technology},
    });

    if (datahistories.length === 0) {
      throw new Error(`No data histories found for technology ${technology}`);
    }

    let dlSum = 0;
    let ulSum = 0;
    let count = 0;

    datahistories.forEach(dh => {
      dlSum += dh.download;
      ulSum += dh.upload;
      count++;
    });

    let dlAvg = dlSum / count || 0;
    let ulAvg = ulSum / count || 0;
    let debit = (dlAvg + ulAvg) / 2;
    debit = parseFloat(debit.toFixed(2));
    dlAvg = parseFloat(dlAvg.toFixed(2));
    ulAvg = parseFloat(ulAvg.toFixed(2));

    const responseObj: Record<string, any> = {
      nom: ambassador.nom,
      prenom: ambassador.prenom,
      technologies: {
        moydl: dlAvg,
        moyUl: ulAvg,
        debitMoy: debit,
        testCount: count,
      },
    };




    return responseObj;
  }

}


