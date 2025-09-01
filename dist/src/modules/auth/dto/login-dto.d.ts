export declare class LoginDto {
    email_id: string;
    password: string;
    device_token: string;
    remember_me?: boolean;
}
export declare class DeleteDto {
    identity: string;
}
export declare class userlogoutDto {
    user_id: number;
}
export declare class VerifyEmailDto {
    email: string;
    otp: string;
}
export declare class ResendEmailDto {
    email: string;
}
