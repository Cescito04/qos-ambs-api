"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesValues = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const properties_model_1 = require("./properties.model");
const souscription_model_1 = require("./souscription.model");
let PropertiesValues = class PropertiesValues extends repository_1.Entity {
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
], PropertiesValues.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PropertiesValues.prototype, "key", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PropertiesValues.prototype, "type", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PropertiesValues.prototype, "value", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => souscription_model_1.Souscription),
    tslib_1.__metadata("design:type", String)
], PropertiesValues.prototype, "souscriptionId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => properties_model_1.Properties),
    tslib_1.__metadata("design:type", String)
], PropertiesValues.prototype, "propertiesId", void 0);
PropertiesValues = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], PropertiesValues);
exports.PropertiesValues = PropertiesValues;
//# sourceMappingURL=properties-values.model.js.map