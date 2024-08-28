import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Classement,
  Challenge,
} from '../models';
import {ClassementRepository} from '../repositories';

export class ClassementChallengeController {
  constructor(
    @repository(ClassementRepository)
    public classementRepository: ClassementRepository,
  ) { }

  @get('/classements/{id}/challenge', {
    responses: {
      '200': {
        description: 'Challenge belonging to Classement',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Challenge),
          },
        },
      },
    },
  })
  async getChallenge(
    @param.path.string('id') id: typeof Classement.prototype.id,
  ): Promise<Challenge> {
    return this.classementRepository.challenge(id);
  }
}
