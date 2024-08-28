"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbassadorController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const multer_1 = tslib_1.__importDefault(require("multer"));
const path_1 = tslib_1.__importDefault(require("path"));
const XLSX = tslib_1.__importStar(require("xlsx"));
const keys_1 = require("../keys");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AmbassadorController = class AmbassadorController {
    constructor(ambassadorRepository, fileUploadRepository, storageDirectory) {
        this.ambassadorRepository = ambassadorRepository;
        this.fileUploadRepository = fileUploadRepository;
        this.storageDirectory = storageDirectory;
        const storage = multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, this.storageDirectory);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        });
        this.uploadHandler = (0, multer_1.default)({ storage });
    }
    async importExcel(request, response) {
        return new Promise((resolve, reject) => {
            this.uploadHandler.single('file')(request, response, async (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    const file = request.file;
                    if (!file) {
                        reject(new Error('No file uploaded.'));
                        return;
                    }
                    const { filename, originalname, mimetype, size } = file;
                    if (!filename || !originalname || !mimetype || !size) {
                        reject(new Error('File information is incomplete.'));
                        return;
                    }
                    const filePath = path_1.default.join(this.storageDirectory, filename);
                    try {
                        const workbook = XLSX.readFile(filePath);
                        const sheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[sheetName];
                        const jsonData = XLSX.utils.sheet_to_json(worksheet);
                        const ambassadors = jsonData.map((row) => ({
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
                        const existingAmbassadorSet = new Set(existingAmbassadors.map(ea => `${ea.nom}_${ea.prenom}_${ea.numero}`));
                        const newAmbassadors = ambassadors.filter(a => a.nom !== undefined &&
                            a.prenom !== undefined &&
                            a.numero !== undefined &&
                            !existingAmbassadorSet.has(`${a.nom}_${a.prenom}_${a.numero}`));
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
                        resolve({ message: 'Ambassadors imported successfully', file: fileUpload });
                    }
                    catch (error) {
                        console.error('Error importing Excel file:', error);
                        reject(new Error('Failed to import ambassadors from Excel.'));
                    }
                }
            });
        });
    }
    async create(ambassador) {
        return this.ambassadorRepository.create(ambassador);
    }
    async count(where) {
        return this.ambassadorRepository.count(where);
    }
    async find(filter) {
        return this.ambassadorRepository.find(filter);
    }
    async updateAll(ambassador, where) {
        return this.ambassadorRepository.updateAll(ambassador, where);
    }
    async findById(id, filter) {
        return this.ambassadorRepository.findById(id, filter);
    }
    async updateById(id, ambassador) {
        await this.ambassadorRepository.updateById(id, ambassador);
    }
    async replaceById(id, ambassador) {
        await this.ambassadorRepository.replaceById(id, ambassador);
    }
    async deleteById(id) {
        await this.ambassadorRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/ambassadors/import-excel', {
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                message: { type: 'string' },
                            },
                        },
                    },
                },
                description: 'Ambassadors imported successfully',
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody.file()),
    tslib_1.__param(1, (0, core_1.inject)(rest_1.RestBindings.Http.RESPONSE)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "importExcel", null);
tslib_1.__decorate([
    (0, rest_1.post)('/ambassadors'),
    (0, rest_1.response)(200, {
        description: 'Ambassador model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Ambassador) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ambassador, {
                    title: 'NewAmbassador',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ambassadors/count'),
    (0, rest_1.response)(200, {
        description: 'Ambassador model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Ambassador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ambassadors'),
    (0, rest_1.response)(200, {
        description: 'Array of Ambassador model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Ambassador, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Ambassador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ambassadors'),
    (0, rest_1.response)(200, {
        description: 'Ambassador PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ambassador, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Ambassador)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Ambassador, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ambassadors/{id}'),
    (0, rest_1.response)(200, {
        description: 'Ambassador model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ambassador, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Ambassador, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ambassadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ambassador PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ambassador, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Ambassador]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ambassadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ambassador PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Ambassador]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ambassadors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ambassador DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AmbassadorController.prototype, "deleteById", null);
AmbassadorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AmbassadorRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.FileRepository)),
    tslib_1.__param(2, (0, core_1.inject)(keys_1.STORAGE_DIRECTORY)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AmbassadorRepository,
        repositories_1.FileRepository, String])
], AmbassadorController);
exports.AmbassadorController = AmbassadorController;
//# sourceMappingURL=ambassador.controller.js.map