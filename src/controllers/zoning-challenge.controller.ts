import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Zoning,
  Challenge,
} from '../models';
import {ZoningRepository} from '../repositories';

export class ZoningChallengeController {
  constructor(
    @repository(ZoningRepository)
    public zoningRepository: ZoningRepository,
  ) { }

  @get('/zonings/{id}/challenge', {
    responses: {
      '200': {
        description: 'Challenge belonging to Zoning',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Challenge),
          },
        },
      },
    },
  })
  async getChallenge(
    @param.path.string('id') id: typeof Zoning.prototype.id,
  ): Promise<Challenge> {
    return this.zoningRepository.challenge(id);
  }
}
