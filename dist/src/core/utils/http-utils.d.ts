export declare class HttpUtils {
    private readonly http;
    constructor(http: any);
    get(url: string): Promise<any>;
    post(url: string, body: any, headers: any): Promise<any>;
}
