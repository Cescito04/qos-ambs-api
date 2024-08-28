"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Souscription = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const ambassador_model_1 = require("./ambassador.model");
const challenge_model_1 = require("./challenge.model");
const classement_model_1 = require("./classement.model");
const properties_values_model_1 = require("./properties-values.model");
let Souscription = class Souscription extends repository_1.Entity {
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
], Souscription.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Souscription.prototype, "date", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => properties_values_model_1.PropertiesValues),
    tslib_1.__metadata("design:type", Array)
], Souscription.prototype, "propertiesValues", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => ambassador_model_1.Ambassador),
    tslib_1.__metadata("design:type", String)
], Souscription.prototype, "ambassadorId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => challenge_model_1.Challenge),
    tslib_1.__metadata("design:type", String)
], Souscription.prototype, "challengeId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => classement_model_1.Classement),
    tslib_1.__metadata("design:type", Array)
], Souscription.prototype, "classements", void 0);
Souscription = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Souscription);
exports.Souscription = Souscription;
//# sourceMappingURL=souscription.model.js.map