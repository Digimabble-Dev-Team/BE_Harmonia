export declare class MailUtils {
    static sendEmailVerificationLink(email: string, verificationUrl: string): Promise<boolean>;
    static sendOtpEmail(email: string, otp: string): Promise<void>;
    static sendPasswordResetEmail(email: string, resetUrl: string): Promise<boolean>;
}
export interface MailOptions {
    to: string | string[];
    subject: string;
    text: string;
    html: string;
    cc?: string[];
    attachments?: AttachmentOptions[];
}
export interface AttachmentOptions {
    filename: string;
    content: any;
    type?: string;
    disposition?: string;
}
