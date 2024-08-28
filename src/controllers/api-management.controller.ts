// Uncomment these imports to begin using these cool features!

import {get, param, post, response, ResponseObject} from '@loopback/rest';
const request = require('request');
// import {inject} from '@loopback/core';
const GET_OTP_RESPONSE: ResponseObject = {
  description: 'OTP Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'OTPResponse',
        properties: {
          status: {type: 'string'},
        },
      },
    },
  },
};
const VERIFY_OTP_RESPONSE: ResponseObject = {
  description: 'OTP Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'OTPResponse',
        properties: {
          status: {type: 'boolean'},
        },
      },
    },
  },
};

export class ApiManagementController {
  constructor() { }
  @post('/apimanagement/sendOTP/{numero}/{appSignature}')
  @response(200, GET_OTP_RESPONSE)
  async sendOTP(
    @param.path.string('numero') numero: string,
    @param.query.string('appSignature') appSignature?: string
  ): Promise<Object> {
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

  @get('/apimanagement/verifyOTP/{otp}')
  @response(200, VERIFY_OTP_RESPONSE)
  async verifyOTP(@param.path.string('otp') otp: string): Promise<Object> {
    const token = await this.auth();
    const response = await this.checkOTP(String(token), otp)
    return {
      status: Boolean(response)
    }

  }
  @get('/apimanagement/sendSMS/{numero}/{message}')
  @response(200)
  async sendSMS(@param.path.string('numero') numero: string, @param.path.string('message') message: string): Promise<Object> {
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
      request(options, function (err: any, res: any) {
        resolve(JSON.parse(res.body).status);
      })
    })

  }
  async getOTP(token: string): Promise<void> {
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
      request(options, (err: any, res: any) => {
        resolve(JSON.parse(res.body).code);
      })
    })

  }
  async checkOTP(token: string, otp: string): Promise<void> {
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
      request(options, (err: any, res: any) => {
        resolve(JSON.parse(res.body).valid);
      })
    })

  }
  async smsOTP(numero: string, token: string, otp: string) {
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
      request(options, function (err: any, res: any) {
        resolve(JSON.parse(res.body).status);
      })
    })
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
      }, (err: any, res: any) => {
        resolve(JSON.parse(res.body).access_token);
      })
    })
  }



}

