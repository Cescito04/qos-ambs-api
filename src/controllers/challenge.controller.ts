import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  Where,
  repository,
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
import {Challenge, Datahistory} from '../models';
import {AmbassadorRepository, ChallengeRepository, DatahistoryRepository, SouscriptionRepository, ZoningRepository} from '../repositories';
import {ApiManagementController} from './api-management.controller';

export class ChallengeController {
  constructor(
    @repository(ChallengeRepository)
    public challengeRepository: ChallengeRepository,
    @repository(SouscriptionRepository)
    public souscriptionRepository: SouscriptionRepository,
    @repository(DatahistoryRepository)
    public datahistoryRepository: DatahistoryRepository,
    @repository(AmbassadorRepository)
    public ambassadorRepository: AmbassadorRepository, // Ajouter le repository des ambassadeurs
    @inject('controllers.ApiManagementController') // Injecter le contrôleur API
    public apiManagementController: ApiManagementController,
    @repository(ZoningRepository)
    public zoningRepository: ZoningRepository,
  ) { }

  @post('/challenges')
  @response(200, {
    description: 'Challenge model instance',
    content: {'application/json': {schema: getModelSchemaRef(Challenge)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Challenge, {
            title: 'NewChallenge',
            exclude: ['id'],
          }),
        },
      },
    })
    challenge: Omit<Challenge, 'id'>,
  ): Promise<Challenge> {
    const newChallenge = await this.challengeRepository.create(challenge);
    await this.notifyAmbassadors(newChallenge);
    return newChallenge;
  }

  async notifyAmbassadors(challenge: Challenge): Promise<void> {

    const ambassadors = await this.ambassadorRepository.find();


    const token = await this.apiManagementController.auth();


    for (const ambassador of ambassadors) {
      const message = `Nouveau challenge créé : ${challenge.nom}`;
      const numero = ambassador.numero;


      await this.apiManagementController.sendSMS(numero, message);
      // console.log(`Message envoyé à ${ambassador.nom} ${ambassador.prenom} au numéro ${numero}`);
    }
  }

  @get('/challenges/count')
  @response(200, {
    description: 'Challenge model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Challenge) where?: Where<Challenge>,
  ): Promise<Count> {
    return this.challengeRepository.count(where);
  }

  @get('/challenges')
  @response(200, {
    description: 'Array of Challenge model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Challenge, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Challenge) filter?: Filter<Challenge>,
  ): Promise<Challenge[]> {
    return this.challengeRepository.find(filter);
  }

  @patch('/challenges')
  @response(200, {
    description: 'Challenge PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Challenge, {partial: true}),
        },
      },
    })
    challenge: Challenge,
    @param.where(Challenge) where?: Where<Challenge>,
  ): Promise<Count> {
    return this.challengeRepository.updateAll(challenge, where);
  }

  @get('/challenges/{id}')
  @response(200, {
    description: 'Challenge model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Challenge, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Challenge, {exclude: 'where'}) filter?: FilterExcludingWhere<Challenge>
  ): Promise<Challenge> {
    return this.challengeRepository.findById(id, filter);
  }

  @get('/classement-challenges/{challengeId}')
  @response(200, {
    description: 'Classement des challenges',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Challenge, {includeRelations: true}),
      },
    },
  })
  async getClassement(
    @param.path.string('challengeId') challengeId: string,
  ): Promise<any[]> {
    return await this.calculeScore(challengeId);
  }

  async calculeScore(id: string) {
    const challenge = await this.challengeRepository.findById(id);
    let departementCoordinates: Coordinate[][] | null = null;

    if (challenge.zone) {
      const zoning = await this.zoningRepository.findOne({
        where: {'attributes.NOM': challenge.zone},
      });

      if (!zoning || !zoning.geometry || !zoning.geometry.rings) {
        throw new Error('Département non trouvé ou sans coordonnées');
      }

      departementCoordinates = zoning.geometry.rings as Coordinate[][];
    }

    const filter: any = {
      where: {challengeId: challenge.id},
      include: [
        {
          relation: 'ambassador',
          scope: {
            include: [{
              relation: 'datahistories',
              scope: {
                where: {
                  and: [
                    {techno: challenge.techno},
                    {date: {gte: challenge.date_debut}},
                    {date: {lte: challenge.date_fin}},
                  ]
                }
              }
            }],
          },
        },
      ],
    };

    if (challenge.type !== 'all') {
      filter.include[0].scope.include[0].scope.where.and.push({type: challenge.type});
    }




    const souscriptions = await this.souscriptionRepository.find(filter);
    const classements: any[] = [];

    souscriptions.forEach(souscription => {
      let dlAvg = 0;
      let ulAvg = 0;
      let numTests = 0;
      let score = 0;

      if (souscription.ambassador && souscription.ambassador.datahistories && souscription.ambassador.datahistories.length > 0) {
        const filteredDatahistories = souscription.ambassador.datahistories.filter((data: Datahistory) => {
          if (departementCoordinates) {
            const isInDepartment = this.isPointInPolygon([data.longitude, data.latitude], departementCoordinates);
            return isInDepartment && new Date(data.date) >= new Date(souscription.date);
          } else {
            return new Date(data.date) >= new Date(souscription.date);
          }
        });

        if (filteredDatahistories.length > 0) {
          const dlValues = filteredDatahistories.map((dh: {download: any;}) => dh.download);
          const ulValues = filteredDatahistories.map((dh: {upload: any;}) => dh.upload);

          dlAvg = this.calculateAverage(dlValues);
          ulAvg = this.calculateAverage(ulValues);
          numTests = filteredDatahistories.length;

          score = Math.round(((dlAvg * 0.65) + (ulAvg * 0.25)) * (numTests * 0.10));

        }
      }

      if (souscription.ambassador)
        classements.push({
          id: souscription.ambassador.id,
          nom: souscription.ambassador.nom,
          prenom: souscription.ambassador.prenom,
          score: score
        });

    });

    return classements;
  }

  isPointInPolygon(point: Coordinate, rings: Coordinate[][]): boolean {
    const [px, py] = point;


    let isInside = false;

    for (const ring of rings) {
      let ringIsInside = false;

      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [ix, iy] = ring[i];
        const [jx, jy] = ring[j];

        const intersect = ((iy > py) !== (jy > py)) && (px < (jx - ix) * (py - iy) / (jy - iy) + ix);
        if (intersect) {
          ringIsInside = !ringIsInside;
        }
      }



      isInside = isInside || ringIsInside;
    }

    return isInside;
  }

  calculateAverage(values: number[]): number {
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, value) => acc + value, 0);
    return sum / values.length;
  }

  @patch('/challenges/{id}')
  @response(204, {
    description: 'Challenge PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Challenge, {partial: true}),
        },
      },
    })
    challenge: Challenge,
  ): Promise<void> {
    await this.challengeRepository.updateById(id, challenge);
  }

  @put('/challenges/{id}')
  @response(204, {
    description: 'Challenge PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() challenge: Challenge,
  ): Promise<void> {
    await this.challengeRepository.replaceById(id, challenge);
  }

  @del('/challenges/{id}')
  @response(204, {
    description: 'Challenge DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.challengeRepository.deleteById(id);
  }

  @get('/detail-classement-challenges/{challengeId}/{ambassadorId}')
  @response(200, {
    description: 'Challenge model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Challenge, {includeRelations: true}),
      },
    },
  })
  async getClassements(
    @param.path.string('challengeId') challengeId: string,
    @param.path.string('ambassadorId') ambassadorId: string,
  ): Promise<any[]> {
    return await this.calculeScores(challengeId, ambassadorId);
  }

  async calculeScores(challengeId: string, ambassadorId: string) {
    const challenge = await this.challengeRepository.findById(challengeId);

    // Initialisation des variables pour la zone
    let departementCoordinates: Coordinate[][] | null = null;
    let zoneNom: string | null = null;

    // Vérifier si une zone est définie et récupérer ses coordonnées
    if (challenge.zone) {
      const zoning = await this.zoningRepository.findOne({
        where: {'attributes.NOM': challenge.zone},
      });

      if (zoning && zoning.geometry && zoning.geometry.rings) {
        departementCoordinates = zoning.geometry.rings as Coordinate[][];
        zoneNom = challenge.zone;
      } else {
        throw new Error('Département non trouvé ou sans coordonnées');
      }

    }

    const filter: any = {
      where: {challengeId: challenge.id, ambassadorId: ambassadorId},
      include: [
        {
          relation: 'ambassador',
          scope: {
            include: [{
              relation: 'datahistories',
              scope: {
                where: {
                  and: [
                    {techno: challenge.techno},
                    {date: {gte: challenge.date_debut}},
                    {date: {lte: challenge.date_fin}},
                  ]
                }
              }
            }],
          },
        },
      ],
    };

    if (challenge.type !== 'all') {
      filter.include[0].scope.include[0].scope.where.and.push({type: challenge.type});
    }

    const souscriptions = await this.souscriptionRepository.find(filter);

    const classements: any[] = [];

    souscriptions.forEach(souscription => {
      let dlAvg = 0;
      let ulAvg = 0;
      let numTests = 0;
      let score = 0;
      let debit = 0;
      let historique = [];


      if (souscription.ambassador.datahistories && souscription.ambassador.datahistories.length > 0) {
        const filteredDatahistories = souscription.ambassador.datahistories.filter((data: Datahistory) => {
          if (departementCoordinates) {
            const isInDepartment = this.isPointInPolygon([data.longitude, data.latitude], departementCoordinates);
            return isInDepartment && new Date(data.date) >= new Date(souscription.date);
          } else {
            return new Date(data.date) >= new Date(souscription.date);
          }
        });

        if (filteredDatahistories.length > 0) {
          const dlValues = filteredDatahistories.map((dh: {download: any;}) => dh.download);
          const ulValues = filteredDatahistories.map((dh: {upload: any;}) => dh.upload);

          dlAvg = this.calculateAverage(dlValues);
          ulAvg = this.calculateAverage(ulValues);
          numTests = filteredDatahistories.length;

          score = Math.round(((dlAvg * 0.65) + (ulAvg * 0.25)) * (numTests * 0.10));
          debit = Math.round(((dlAvg + ulAvg) / 2));
          historique = filteredDatahistories; // Stocker tout l'historique
        }
      }

      const classement: any = {
        nom: souscription.ambassador.nom,
        prenom: souscription.ambassador.prenom,
        moyUL: ulAvg,
        moyDl: dlAvg,
        debitMoy: debit,
        testCount: numTests,
        historique: historique // Inclure tout l'historique
      };

      // Inclure les informations de la zone seulement si elles sont disponibles
      if (zoneNom && departementCoordinates) {
        classement.zone = {
          nom: zoneNom,
          rings: departementCoordinates
        };
      }

      classements.push(classement);
    });

    return classements;
  }
}

type Coordinate = [number, number]; // [longitude, latitude]
