import { BaseEntity } from 'typeorm';
export declare abstract class BaseModel extends BaseEntity {
    id: number;
    is_active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
