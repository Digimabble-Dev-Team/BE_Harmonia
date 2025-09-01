export default class Encryption {
    static encryptValue: (input_data: any) => string;
    static decryptValue: (input_data: any) => any;
    static hashPassword(password: string): string;
    static comparePassword(enteredPassword: string, dbPassword: string): boolean;
    static generateRawToken(): string;
    static hashToken(raw: string): string;
}
