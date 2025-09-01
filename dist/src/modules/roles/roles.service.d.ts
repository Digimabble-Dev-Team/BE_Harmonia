import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { PermissionsService } from '../permissions/permissions.service';
export declare class RolesService {
    private readonly roleRepository;
    private readonly permissionsService;
    constructor(roleRepository: Repository<Role>, permissionsService: PermissionsService);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role>;
    remove(id: number): Promise<void>;
}
