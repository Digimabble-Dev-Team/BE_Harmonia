import { BaseModel } from 'src/core/database/BaseModel';
import { Permission } from '../../permissions/entities/permission.entity';
export declare class Menu extends BaseModel {
    name: string;
    description: string;
    path: string;
    icon: string;
    parent_id: number;
    order: number;
    is_active: boolean;
    is_visible: boolean;
    parent: Menu;
    children: Menu[];
    permissions: Permission[];
}
