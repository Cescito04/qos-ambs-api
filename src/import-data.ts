import {QosambassadorsApiApplication} from './application';
import * as zoningData from './data/features.json';
import {ZoningRepository} from './repositories';

async function importData() {
  const app = new QosambassadorsApiApplication();
  await app.boot();
  const zoningRepo = await app.getRepository(ZoningRepository);

  if (!Array.isArray(zoningData)) {
    throw new Error('Zoning data is not an array');
  }

  for (const zoning of zoningData) {
    const {attributes, geometry} = zoning;
    const zoningEntry = {
      ...attributes,
      rings: geometry.rings,
    };
    await zoningRepo.create(zoningEntry);
  }

  console.log('Data imported successfully.');
  process.exit(0);
}

importData().catch(err => {
  console.error('Failed to import data.', err);
  process.exit(1);
});
