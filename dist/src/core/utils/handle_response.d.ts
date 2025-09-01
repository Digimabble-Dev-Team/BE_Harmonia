export default class HandleResponse {
    res: any;
    constructor(options: any);
    static success(res: any, code: number, status: boolean, message: string, data?: any): void;
    static serverError(res: any, message?: string, data?: any): void;
    static buildSuccessObj(code: number, message: string, data?: any): any;
    static buildErrObj(code?: any, message?: any, error?: any): {
        statusCode: any;
        status: boolean;
        message: any;
        error: any;
        code?: undefined;
    } | {
        code: any;
        status: boolean;
        message: any;
        error: any;
        statusCode?: undefined;
    };
}
