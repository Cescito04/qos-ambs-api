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
import {Classement} from '../models';
import {ClassementRepository} from '../repositories';

export class ClassementController {
  constructor(
    @repository(ClassementRepository)
    public classementRepository: ClassementRepository,
  ) { }

  @post('/classements')
  @response(200, {
    description: 'Classement model instance',
    content: {'application/json': {schema: getModelSchemaRef(Classement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classement, {
            title: 'NewClassement',
            exclude: ['id'],
          }),
        },
      },
    })
    classement: Omit<Classement, 'id'>,
  ): Promise<Classement> {
    return this.classementRepository.create(classement);
  }

  @get('/classements/count')
  @response(200, {
    description: 'Classement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Classement) where?: Where<Classement>,
  ): Promise<Count> {
    return this.classementRepository.count(where);
  }

  @get('/classements')
  @response(200, {
    description: 'Array of Classement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Classement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Classement) filter?: Filter<Classement>,
  ): Promise<Classement[]> {
    return this.classementRepository.find(filter);
  }

  @patch('/classements')
  @response(200, {
    description: 'Classement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classement, {partial: true}),
        },
      },
    })
    classement: Classement,
    @param.where(Classement) where?: Where<Classement>,
  ): Promise<Count> {
    return this.classementRepository.updateAll(classement, where);
  }

  @get('/classements/{id}')
  @response(200, {
    description: 'Classement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Classement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Classement, {exclude: 'where'}) filter?: FilterExcludingWhere<Classement>
  ): Promise<Classement> {
    return this.classementRepository.findById(id, filter);
  }

  @patch('/classements/{id}')
  @response(204, {
    description: 'Classement PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classement, {partial: true}),
        },
      },
    })
    classement: Classement,
  ): Promise<void> {
    await this.classementRepository.updateById(id, classement);
  }

  @put('/classements/{id}')
  @response(204, {
    description: 'Classement PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() classement: Classement,
  ): Promise<void> {
    await this.classementRepository.replaceById(id, classement);
  }

  @del('/classements/{id}')
  @response(204, {
    description: 'Classement DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.classementRepository.deleteById(id);
  }

  /* @get('/classements/calculate-scores')
  @response(200, {
    description: 'Calcul des scores pour les classements',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Classement, {includeRelations: true}),
        },
      },
    },
  })
  async calculateScores(): Promise<any[]> {
    const filter = {
      include: [
        {
          relation: 'challenge', // Inclure la relation challenge
        },
        {
          relation: 'souscription',
          scope: {
            include: [
              {
                relation: 'ambassador',
                scope: {
                  include: ['datahistories'],
                },
              },
            ],
          },
        },
      ],
    };

    const classements = await this.classementRepository.find(filter);

    const results = classements.map(classement => {
      const challenge = classement.challenge;
      const subscribe = classement.souscription;

      // Vérifier si le challenge a la technologie et les dates spécifiées
      if (challenge?.techno && challenge.date_debut && challenge.date_fin) {
        const techno = challenge.techno;
        const startDate = new Date(subscribe.date);
        // const startDate = new Date(challenge.date_debut);
        const endDate = new Date(challenge.date_fin);

        const datahistories = classement.souscription?.ambassador?.datahistories || [];

        // Filtrer les datahistories par technologie et par dates
        const filteredDatahistories = datahistories.filter((dh: {techno: string; date: string;}) => {
          const isTechnoMatch = dh.techno === techno;
          const isDateMatch = new Date(dh.date) >= startDate && new Date(dh.date) <= endDate;
          return isTechnoMatch && isDateMatch;
        });

        //  console.log(`Datahistories filtrés pour la techno ${techno}:`, filteredDatahistories);

        const dlValues = filteredDatahistories.map((dh: {download: any;}) => dh.download);
        const ulValues = filteredDatahistories.map((dh: {upload: any;}) => dh.upload);


        const dlAvg = this.calculateAverage(dlValues);
        const ulAvg = this.calculateAverage(ulValues);
        const numTests = filteredDatahistories.length;


        const score = Math.round(((dlAvg * 0.7) + (ulAvg * 0.3)) * numTests);
        // console.log(`Score pour le classement ${classement.id}: ${score}`);

        return {...classement.toJSON(), score};
      }

      return {...classement.toJSON(), score: 404}; // Retourner un score de 0 si les informations du challenge sont manquantes
    });

    return results;
  } */

  // Fonction utilitaire pour calculer la moyenne
  calculateAverage(values: number[]): number {
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, value) => acc + value, 0);
    return sum / values.length;
  }
}
