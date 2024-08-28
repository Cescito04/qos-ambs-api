import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Properties,
  Challenge,
} from '../models';
import {PropertiesRepository} from '../repositories';

export class PropertiesChallengeController {
  constructor(
    @repository(PropertiesRepository)
    public propertiesRepository: PropertiesRepository,
  ) { }

  @get('/properties/{id}/challenge', {
    responses: {
      '200': {
        description: 'Challenge belonging to Properties',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Challenge),
          },
        },
      },
    },
  })
  async getChallenge(
    @param.path.string('id') id: typeof Properties.prototype.id,
  ): Promise<Challenge> {
    return this.propertiesRepository.challenge(id);
  }
}
