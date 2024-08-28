"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QosambassadorsApiApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const multer_1 = tslib_1.__importDefault(require("multer"));
const path_1 = tslib_1.__importDefault(require("path"));
const api_management_controller_1 = require("./controllers/api-management.controller");
const datasources_1 = require("./datasources");
const keys_1 = require("./keys");
const repositories_1 = require("./repositories");
const sequence_1 = require("./sequence");
class QosambassadorsApiApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Register the controller
        this.controller(api_management_controller_1.ApiManagementController);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
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
        this.repository(repositories_1.ZoningRepository);
        this.dataSource(datasources_1.QosAmbsDbDataSource);
    }
    configureFileUpload(destination) {
        // Upload files to `dist/.sandbox` by default
        destination = destination !== null && destination !== void 0 ? destination : path_1.default.join(__dirname, '../files');
        this.bind(keys_1.STORAGE_DIRECTORY).to(destination);
        const multerOptions = {
            storage: multer_1.default.diskStorage({
                destination,
                filename: (req, file, cb) => {
                    cb(null, file.originalname);
                },
            }),
        };
        // Configure the file upload service with multer options
        this.configure(keys_1.FILE_UPLOAD_SERVICE).to(multerOptions);
    }
    // Custom method to handle redirection
    setupRootRedirect() {
        this.route(new rest_1.RedirectRoute('/', '/explorer'));
    }
}
exports.QosambassadorsApiApplication = QosambassadorsApiApplication;
//# sourceMappingURL=application.js.map