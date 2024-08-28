"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const classement_model_1 = require("./classement.model");
const properties_model_1 = require("./properties.model");
const souscription_model_1 = require("./souscription.model");
const zoning_model_1 = require("./zoning.model");
let Challenge = class Challenge extends repository_1.Entity {
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
], Challenge.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "nom", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "date_debut", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "date_fin", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "image", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "type", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "techno", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "statut", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Challenge.prototype, "zone", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => souscription_model_1.Souscription),
    tslib_1.__metadata("design:type", Array)
], Challenge.prototype, "souscriptions", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => properties_model_1.Properties),
    tslib_1.__metadata("design:type", Array)
], Challenge.prototype, "properties", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => classement_model_1.Classement),
    tslib_1.__metadata("design:type", Array)
], Challenge.prototype, "classements", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => zoning_model_1.Zoning),
    tslib_1.__metadata("design:type", zoning_model_1.Zoning)
], Challenge.prototype, "zoning", void 0);
Challenge = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Challenge);
exports.Challenge = Challenge;
//# sourceMappingURL=challenge.model.js.map