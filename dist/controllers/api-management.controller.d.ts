export declare class ApiManagementController {
    constructor();
    sendOTP(numero: string, appSignature?: string): Promise<Object>;
    verifyOTP(otp: string): Promise<Object>;
    sendSMS(numero: string, message: string): Promise<Object>;
    getOTP(token: string): Promise<void>;
    checkOTP(token: string, otp: string): Promise<void>;
    smsOTP(numero: string, token: string, otp: string): Promise<unknown>;
    auth(): Promise<unknown>;
}
