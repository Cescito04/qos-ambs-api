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
  Ambassador,
} from '../models';
import {SouscriptionRepository} from '../repositories';

export class SouscriptionAmbassadorController {
  constructor(
    @repository(SouscriptionRepository)
    public souscriptionRepository: SouscriptionRepository,
  ) { }

  @get('/souscriptions/{id}/ambassador', {
    responses: {
      '200': {
        description: 'Ambassador belonging to Souscription',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Ambassador),
          },
        },
      },
    },
  })
  async getAmbassador(
    @param.path.string('id') id: typeof Souscription.prototype.id,
  ): Promise<Ambassador> {
    return this.souscriptionRepository.ambassador(id);
  }
}
