export default class EmailTemService {
    static logo(): string;
    static emailOtpVerification(otp: any): string;
    static emailPasswordVerification(password: any): void;
    static forgotPassword(token: any): void;
}
