"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiManagementController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const request = require('request');
// import {inject} from '@loopback/core';
const GET_OTP_RESPONSE = {
    description: 'OTP Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'OTPResponse',
                properties: {
                    status: { type: 'string' },
                },
            },
        },
    },
};
const VERIFY_OTP_RESPONSE = {
    description: 'OTP Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'OTPResponse',
                properties: {
                    status: { type: 'boolean' },
                },
            },
        },
    },
};
class ApiManagementController {
    constructor() { }
    async sendOTP(numero, appSignature) {
        const token = await this.auth();
        const otp = await this.getOTP(String(token));
        let otpMessage = `${otp}`;
        if (appSignature) {
            otpMessage += ` ${appSignature}`;
        }
        const response = await this.smsOTP(numero, String(token), otpMessage);
        return {
            status: String(response)
        };
    }
    async verifyOTP(otp) {
        const token = await this.auth();
        const response = await this.checkOTP(String(token), otp);
        return {
            status: Boolean(response)
        };
    }
    async sendSMS(numero, message) {
        const token = await this.auth();
        const options = {
            'method': 'POST',
            'url': 'https://api.orange-sonatel.com/api/communication/v1/messages',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "body": message,
                "channel": "SMS",
                "senderName": "QOSAmbs",
                "to": numero,
                "confidential": false
            })
        };
        return new Promise((resolve, reject) => {
            request(options, function (err, res) {
                resolve(JSON.parse(res.body).status);
            });
        });
    }
    async getOTP(token) {
        const options = {
            'method': 'POST',
            'url': 'https://api.orange-sonatel.com/api/eligibility/v1/services/otpCode',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "channel": "QOSAmbs",
                "validity": 300
            })
        };
        return new Promise((resolve, reject) => {
            request(options, (err, res) => {
                resolve(JSON.parse(res.body).code);
            });
        });
    }
    async checkOTP(token, otp) {
        const options = {
            'method': 'GET',
            'url': 'https://api.orange-sonatel.com/api/eligibility/v1/services/otpCode/validity?channel=QOSAmbs&otpCode=' + otp,
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
        return new Promise((resolve, reject) => {
            request(options, (err, res) => {
                resolve(JSON.parse(res.body).valid);
            });
        });
    }
    async smsOTP(numero, token, otp) {
        const options = {
            'method': 'POST',
            'url': 'https://api.orange-sonatel.com/api/communication/v1/messages',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "body": "Code de confirmation: " + otp,
                "channel": "SMS",
                "senderName": "QOSAmbs",
                "to": numero,
                "confidential": false
            })
        };
        return new Promise((resolve, reject) => {
            request(options, function (err, res) {
                resolve(JSON.parse(res.body).status);
            });
        });
    }
    async auth() {
        return new Promise((resolve, reject) => {
            request({
                url: 'https://api.orange-sonatel.com/oauth/token',
                method: 'POST',
                form: {
                    'client_id': 'c6291364-637a-4fdc-bc07-ceb15741653f',
                    'client_secret': '82818299-8d9c-44ea-b09f-cc0975d5c7b1',
                    'scope': 'openid',
                    'grant_type': 'client_credentials',
                }
            }, (err, res) => {
                resolve(JSON.parse(res.body).access_token);
            });
        });
    }
}
tslib_1.__decorate([
    (0, rest_1.post)('/apimanagement/sendOTP/{numero}/{appSignature}'),
    (0, rest_1.response)(200, GET_OTP_RESPONSE),
    tslib_1.__param(0, rest_1.param.path.string('numero')),
    tslib_1.__param(1, rest_1.param.query.string('appSignature')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiManagementController.prototype, "sendOTP", null);
tslib_1.__decorate([
    (0, rest_1.get)('/apimanagement/verifyOTP/{otp}'),
    (0, rest_1.response)(200, VERIFY_OTP_RESPONSE),
    tslib_1.__param(0, rest_1.param.path.string('otp')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiManagementController.prototype, "verifyOTP", null);
tslib_1.__decorate([
    (0, rest_1.get)('/apimanagement/sendSMS/{numero}/{message}'),
    (0, rest_1.response)(200),
    tslib_1.__param(0, rest_1.param.path.string('numero')),
    tslib_1.__param(1, rest_1.param.path.string('message')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiManagementController.prototype, "sendSMS", null);
exports.ApiManagementController = ApiManagementController;
//# sourceMappingURL=api-management.controller.js.map