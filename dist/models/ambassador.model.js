"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ambassador = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const datahistory_model_1 = require("./datahistory.model");
const le_bon_coin_model_1 = require("./le-bon-coin.model");
const souscription_model_1 = require("./souscription.model");
let Ambassador = class Ambassador extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ambassador.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ambassador.prototype, "numero", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ambassador.prototype, "prenom", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ambassador.prototype, "nom", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => datahistory_model_1.Datahistory),
    tslib_1.__metadata("design:type", Array)
], Ambassador.prototype, "datahistories", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => le_bon_coin_model_1.LeBonCoin),
    tslib_1.__metadata("design:type", le_bon_coin_model_1.LeBonCoin)
], Ambassador.prototype, "leBonCoin", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => souscription_model_1.Souscription),
    tslib_1.__metadata("design:type", Array)
], Ambassador.prototype, "souscriptions", void 0);
Ambassador = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ambassador);
exports.Ambassador = Ambassador;
//# sourceMappingURL=ambassador.model.js.map