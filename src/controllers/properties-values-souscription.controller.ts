import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  PropertiesValues,
  Souscription,
} from '../models';
import {PropertiesValuesRepository} from '../repositories';

export class PropertiesValuesSouscriptionController {
  constructor(
    @repository(PropertiesValuesRepository)
    public propertiesValuesRepository: PropertiesValuesRepository,
  ) { }

  @get('/properties-values/{id}/souscription', {
    responses: {
      '200': {
        description: 'Souscription belonging to PropertiesValues',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Souscription),
          },
        },
      },
    },
  })
  async getSouscription(
    @param.path.string('id') id: typeof PropertiesValues.prototype.id,
  ): Promise<Souscription> {
    return this.propertiesValuesRepository.souscription(id);
  }
}
