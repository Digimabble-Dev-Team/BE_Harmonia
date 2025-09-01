"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesPermissionsSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("../modules/roles/entities/role.entity");
const permission_entity_1 = require("../modules/permissions/entities/permission.entity");
let RolesPermissionsSeeder = class RolesPermissionsSeeder {
    constructor(roleRepo, permissionRepo) {
        this.roleRepo = roleRepo;
        this.permissionRepo = permissionRepo;
    }
    async onModuleInit() {
        await this.seedPermissionsAndRoles();
    }
    async seedPermissionsAndRoles() {
        const permissionsToSeed = [
            { name: 'Create Staff', action: 'create', resource: 'staff', description: 'Create staff member' },
            { name: 'View Staff', action: 'read', resource: 'staff', description: 'View staff' },
            { name: 'Update Staff', action: 'update', resource: 'staff', description: 'Update staff info' },
            { name: 'Delete Staff', action: 'delete', resource: 'staff', description: 'Delete staff' },
            { name: 'Create Patient', action: 'create', resource: 'patient', description: 'Create patient record' },
            { name: 'Read Patient', action: 'read', resource: 'patient', description: 'View patient record' },
            { name: 'Update Patient', action: 'update', resource: 'patient', description: 'Update patient record' },
            { name: 'Delete Patient', action: 'delete', resource: 'patient', description: 'Delete patient record' },
            { name: 'Read Appointment', action: 'read', resource: 'appointment', description: 'View appointments' },
            { name: 'Update Appointment', action: 'update', resource: 'appointment', description: 'Update appointments' },
        ];
        const rolesToSeed = ['super-admin', 'branch-admin', 'staff'];
        for (const perm of permissionsToSeed) {
            const exists = await this.permissionRepo.findOne({
                where: { action: perm.action, resource: perm.resource },
            });
            if (!exists) {
                await this.permissionRepo.save(this.permissionRepo.create(Object.assign(Object.assign({}, perm), { is_active: true })));
            }
        }
        const allPermissions = await this.permissionRepo.find();
        const rolePermissionMap = {
            'super-admin': allPermissions,
            'branch-admin': allPermissions.filter(p => ['read', 'create', 'update'].includes(p.action) &&
                ['staff', 'patient', 'appointment'].includes(p.resource)),
            'staff': allPermissions.filter(p => ['read'].includes(p.action) &&
                ['patient'].includes(p.resource)),
        };
        for (const roleName of rolesToSeed) {
            let role = await this.roleRepo.findOne({ where: { name: roleName }, relations: ['permissions'] });
            if (!role) {
                role = this.roleRepo.create({
                    name: roleName,
                    description: `${roleName} role`,
                    is_default: false,
                    role_type: roleName,
                });
            }
            role.permissions = rolePermissionMap[roleName] || [];
            await this.roleRepo.save(role);
        }
        console.log('✅ Roles and permissions seeded dynamically');
    }
};
RolesPermissionsSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RolesPermissionsSeeder);
exports.RolesPermissionsSeeder = RolesPermissionsSeeder;
//# sourceMappingURL=roles-permissions.seeder.js.map