import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Souscription,
  Challenge,
} from '../models';
import {SouscriptionRepository} from '../repositories';

export class SouscriptionChallengeController {
  constructor(
    @repository(SouscriptionRepository)
    public souscriptionRepository: SouscriptionRepository,
  ) { }

  @get('/souscriptions/{id}/challenge', {
    responses: {
      '200': {
        description: 'Challenge belonging to Souscription',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Challenge),
          },
        },
      },
    },
  })
  async getChallenge(
    @param.path.string('id') id: typeof Souscription.prototype.id,
  ): Promise<Challenge> {
    return this.souscriptionRepository.challenge(id);
  }
}
