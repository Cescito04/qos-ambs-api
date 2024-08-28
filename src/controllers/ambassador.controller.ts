import {inject} from '@loopback/core';
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
  Request,
  requestBody,
  response,
  Response,
  RestBindings,
} from '@loopback/rest';
import multer from 'multer';
import path from 'path';
import * as XLSX from 'xlsx';
import {STORAGE_DIRECTORY} from '../keys';
import {Ambassador} from '../models';
import {AmbassadorRepository, FileRepository} from '../repositories';

export class AmbassadorController {
  private storageDirectory: string;
  private uploadHandler: multer.Multer;

  constructor(
    @repository(AmbassadorRepository)
    public ambassadorRepository: AmbassadorRepository,
    @repository(FileRepository)
    public fileUploadRepository: FileRepository,
    @inject(STORAGE_DIRECTORY) storageDirectory: string,
  ) {
    this.storageDirectory = storageDirectory;

    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, this.storageDirectory);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });

    this.uploadHandler = multer({storage});
  }

  @post('/ambassadors/import-excel', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {type: 'string'},
              },
            },
          },
        },
        description: 'Ambassadors imported successfully',
      },
    },
  })
  async importExcel(
    @requestBody.file()
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.uploadHandler.single('file')(request, response, async (err: unknown) => {
        if (err) {
          reject(err);
        } else {
          const file = request.file;
          if (!file) {
            reject(new Error('No file uploaded.'));
            return;
          }

          const {filename, originalname, mimetype, size} = file;
          if (!filename || !originalname || !mimetype || !size) {
            reject(new Error('File information is incomplete.'));
            return;
          }

          const filePath = path.join(this.storageDirectory, filename);

          try {
            const workbook = XLSX.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            const ambassadors: Partial<Ambassador>[] = jsonData.map((row: any) => ({
              nom: row['Nom'],
              prenom: row['Prénom'],
              numero: row['Numéro'],
            }));

            const existingAmbassadors = await this.ambassadorRepository.find({
              where: {
                or: ambassadors.map(a => ({
                  nom: a.nom,
                  prenom: a.prenom,
                  numero: a.numero
                }))
              }
            });

            const existingAmbassadorSet = new Set(
              existingAmbassadors.map(
                ea => `${ea.nom}_${ea.prenom}_${ea.numero}`
              )
            );

            const newAmbassadors = ambassadors.filter(a =>
              a.nom !== undefined &&
              a.prenom !== undefined &&
              a.numero !== undefined &&
              !existingAmbassadorSet.has(`${a.nom}_${a.prenom}_${a.numero}`)
            );

            if (newAmbassadors.length > 0) {
              await this.ambassadorRepository.createAll(newAmbassadors);
            }

            const fileUpload = await this.fileUploadRepository.create({
              filename: originalname,
              filepath: filePath,
              mimetype: mimetype,
              size: size,
              uploadedAt: new Date(),
            });

            resolve({message: 'Ambassadors imported successfully', file: fileUpload});
          } catch (error) {
            console.error('Error importing Excel file:', error);
            reject(new Error('Failed to import ambassadors from Excel.'));
          }
        }
      });
    });
  }


  @post('/ambassadors')
  @response(200, {
    description: 'Ambassador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ambassador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ambassador, {
            title: 'NewAmbassador',
            exclude: ['id'],
          }),
        },
      },
    })
    ambassador: Omit<Ambassador, 'id'>,
  ): Promise<Ambassador> {
    return this.ambassadorRepository.create(ambassador);
  }

  @get('/ambassadors/count')
  @response(200, {
    description: 'Ambassador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ambassador) where?: Where<Ambassador>,
  ): Promise<Count> {
    return this.ambassadorRepository.count(where);
  }

  @get('/ambassadors')
  @response(200, {
    description: 'Array of Ambassador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ambassador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ambassador) filter?: Filter<Ambassador>,
  ): Promise<Ambassador[]> {
    return this.ambassadorRepository.find(filter);
  }

  @patch('/ambassadors')
  @response(200, {
    description: 'Ambassador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ambassador, {partial: true}),
        },
      },
    })
    ambassador: Ambassador,
    @param.where(Ambassador) where?: Where<Ambassador>,
  ): Promise<Count> {
    return this.ambassadorRepository.updateAll(ambassador, where);
  }

  @get('/ambassadors/{id}')
  @response(200, {
    description: 'Ambassador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ambassador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Ambassador, {exclude: 'where'}) filter?: FilterExcludingWhere<Ambassador>
  ): Promise<Ambassador> {
    return this.ambassadorRepository.findById(id, filter);
  }

  @patch('/ambassadors/{id}')
  @response(204, {
    description: 'Ambassador PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ambassador, {partial: true}),
        },
      },
    })
    ambassador: Ambassador,
  ): Promise<void> {
    await this.ambassadorRepository.updateById(id, ambassador);
  }

  @put('/ambassadors/{id}')
  @response(204, {
    description: 'Ambassador PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ambassador: Ambassador,
  ): Promise<void> {
    await this.ambassadorRepository.replaceById(id, ambassador);
  }

  @del('/ambassadors/{id}')
  @response(204, {
    description: 'Ambassador DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ambassadorRepository.deleteById(id);
  }
}
