import { BaseModel } from 'src/core/database/BaseModel';
import { Role } from '../../roles/entities/role.entity';
import { Menu } from '../../menus/entities/menu.entity';
export declare class Permission extends BaseModel {
    name: string;
    description: string;
    action: string;
    resource: string;
    roles: Role[];
    menus: Menu[];
}
