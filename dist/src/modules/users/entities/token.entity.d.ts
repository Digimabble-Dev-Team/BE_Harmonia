import { BaseModel } from 'src/core/database/BaseModel';
export declare class Token extends BaseModel {
    user_email: string;
    token: string;
    type: string;
    expires_at: Date;
}
