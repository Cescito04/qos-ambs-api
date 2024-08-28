"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeBonCoin = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let LeBonCoin = class LeBonCoin extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], LeBonCoin.prototype, "dl", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], LeBonCoin.prototype, "ul", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], LeBonCoin.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeBonCoin.prototype, "ambassadorId", void 0);
LeBonCoin = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], LeBonCoin);
exports.LeBonCoin = LeBonCoin;
//# sourceMappingURL=le-bon-coin.model.js.map