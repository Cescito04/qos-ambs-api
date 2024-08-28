"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const challenge_model_1 = require("./challenge.model");
const properties_values_model_1 = require("./properties-values.model");
let Properties = class Properties extends repository_1.Entity {
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
], Properties.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Properties.prototype, "key", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Properties.prototype, "type", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => challenge_model_1.Challenge),
    tslib_1.__metadata("design:type", String)
], Properties.prototype, "challengeId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => properties_values_model_1.PropertiesValues),
    tslib_1.__metadata("design:type", Array)
], Properties.prototype, "propertiesValues", void 0);
Properties = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Properties);
exports.Properties = Properties;
//# sourceMappingURL=properties.model.js.map