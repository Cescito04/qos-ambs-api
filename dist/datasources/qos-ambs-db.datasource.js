"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QosAmbsDbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'qosAmbsDb',
    connector: 'mongodb',
    url: 'mongodb+srv://qosambs:LAwdxqi7rne6djc4@cluster0.qso3g5l.mongodb.net/test?retryWrites=true&w=majority'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let QosAmbsDbDataSource = class QosAmbsDbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
QosAmbsDbDataSource.dataSourceName = 'qosAmbsDb';
QosAmbsDbDataSource.defaultConfig = config;
QosAmbsDbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.qosAmbsDb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], QosAmbsDbDataSource);
exports.QosAmbsDbDataSource = QosAmbsDbDataSource;
//# sourceMappingURL=qos-ambs-db.datasource.js.map