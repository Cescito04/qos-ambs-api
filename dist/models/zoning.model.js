"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoning = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const challenge_model_1 = require("./challenge.model");
let Zoning = class Zoning extends repository_1.Entity {
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
], Zoning.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Zoning.prototype, "attributes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], Zoning.prototype, "geometry", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => challenge_model_1.Challenge),
    tslib_1.__metadata("design:type", String)
], Zoning.prototype, "challengeId", void 0);
Zoning = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Zoning);
exports.Zoning = Zoning;
//# sourceMappingURL=zoning.model.js.map