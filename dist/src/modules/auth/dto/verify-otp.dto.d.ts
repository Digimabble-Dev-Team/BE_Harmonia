import { SendOtpDto } from './send-otp.dto';
declare const VerifyOtpDto_base: import("@nestjs/mapped-types").MappedType<Partial<SendOtpDto>>;
export declare class VerifyOtpDto extends VerifyOtpDto_base {
    email_id: string;
    otp: string;
    email_verified: boolean;
    device_token: string;
}
export {};
