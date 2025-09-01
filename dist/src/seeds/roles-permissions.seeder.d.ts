import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Permission } from 'src/modules/permissions/entities/permission.entity';
export declare class RolesPermissionsSeeder implements OnModuleInit {
    private readonly roleRepo;
    private readonly permissionRepo;
    constructor(roleRepo: Repository<Role>, permissionRepo: Repository<Permission>);
    onModuleInit(): Promise<void>;
    seedPermissionsAndRoles(): Promise<void>;
}
