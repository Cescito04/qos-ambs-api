"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classement = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const challenge_model_1 = require("./challenge.model");
const souscription_model_1 = require("./souscription.model");
let Classement = class Classement extends repository_1.Entity {
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
], Classement.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Classement.prototype, "score", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => challenge_model_1.Challenge),
    tslib_1.__metadata("design:type", String)
], Classement.prototype, "challengeId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => souscription_model_1.Souscription),
    tslib_1.__metadata("design:type", String)
], Classement.prototype, "souscriptionId", void 0);
Classement = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Classement);
exports.Classement = Classement;
//# sourceMappingURL=classement.model.js.map