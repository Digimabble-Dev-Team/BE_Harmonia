import { BaseModel } from 'src/core/database/BaseModel';
import { Permission } from '../../permissions/entities/permission.entity';
export declare class Role extends BaseModel {
    name: string;
    description: string;
    is_default: boolean;
    role_type: string;
    permissions: Permission[];
}
