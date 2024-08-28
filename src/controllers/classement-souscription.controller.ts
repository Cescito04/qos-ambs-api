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
  Souscription,
} from '../models';
import {ClassementRepository} from '../repositories';

export class ClassementSouscriptionController {
  constructor(
    @repository(ClassementRepository)
    public classementRepository: ClassementRepository,
  ) { }

  @get('/classements/{id}/souscription', {
    responses: {
      '200': {
        description: 'Souscription belonging to Classement',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Souscription),
          },
        },
      },
    },
  })
  async getSouscription(
    @param.path.string('id') id: typeof Classement.prototype.id,
  ): Promise<Souscription> {
    return this.classementRepository.souscription(id);
  }
}
