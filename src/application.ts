import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RedirectRoute, RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import multer from 'multer';
import path from 'path';
import {ApiManagementController} from './controllers/api-management.controller';
import {QosAmbsDbDataSource} from './datasources';
import {FILE_UPLOAD_SERVICE, STORAGE_DIRECTORY} from './keys';
import {ZoningRepository} from './repositories';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class QosambassadorsApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Register the controller
    this.controller(ApiManagementController);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    // Set up a root route redirection to '/explorer'
    this.setupRootRedirect();

    // Configure file upload service
    this.configureFileUpload(options.fileStorageDirectory);

    // Set the project root
    this.projectRoot = __dirname;

    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    // Register the repository and data source
    this.repository(ZoningRepository);
    this.dataSource(QosAmbsDbDataSource);
  }

  protected configureFileUpload(destination?: string) {
    // Upload files to `dist/.sandbox` by default
    destination = destination ?? path.join(__dirname, '../files');
    this.bind(STORAGE_DIRECTORY).to(destination);

    const multerOptions: multer.Options = {
      storage: multer.diskStorage({
        destination,
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    };
    // Configure the file upload service with multer options
    this.configure(FILE_UPLOAD_SERVICE).to(multerOptions);
  }

  // Custom method to handle redirection
  setupRootRedirect() {
    this.route(new RedirectRoute('/', '/explorer'));
  }
}
