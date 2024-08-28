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
  Properties,
} from '../models';
import {PropertiesValuesRepository} from '../repositories';

export class PropertiesValuesPropertiesController {
  constructor(
    @repository(PropertiesValuesRepository)
    public propertiesValuesRepository: PropertiesValuesRepository,
  ) { }

  @get('/properties-values/{id}/properties', {
    responses: {
      '200': {
        description: 'Properties belonging to PropertiesValues',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Properties),
          },
        },
      },
    },
  })
  async getProperties(
    @param.path.string('id') id: typeof PropertiesValues.prototype.id,
  ): Promise<Properties> {
    return this.propertiesValuesRepository.properties(id);
  }
}
