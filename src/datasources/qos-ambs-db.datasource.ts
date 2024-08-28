import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
const config = {
  name: 'qosAmbsDb',
  connector: 'mongodb',
  url: 'mongodb+srv://qosambs:LAwdxqi7rne6djc4@cluster0.qso3g5l.mongodb.net/test?retryWrites=true&w=majority'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class QosAmbsDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'qosAmbsDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.qosAmbsDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
