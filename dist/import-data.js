"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const application_1 = require("./application");
const zoningData = tslib_1.__importStar(require("./data/features.json"));
const repositories_1 = require("./repositories");
async function importData() {
    const app = new application_1.QosambassadorsApiApplication();
    await app.boot();
    const zoningRepo = await app.getRepository(repositories_1.ZoningRepository);
    if (!Array.isArray(zoningData)) {
        throw new Error('Zoning data is not an array');
    }
    for (const zoning of zoningData) {
        const { attributes, geometry } = zoning;
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
//# sourceMappingURL=import-data.js.map