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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
const permissions_service_1 = require("../permissions/permissions.service");
let RolesService = class RolesService {
    constructor(roleRepository, permissionsService) {
        this.roleRepository = roleRepository;
        this.permissionsService = permissionsService;
    }
    async create(createRoleDto) {
        const { permission_ids } = createRoleDto, roleData = __rest(createRoleDto, ["permission_ids"]);
        const role = this.roleRepository.create(roleData);
        if (permission_ids && permission_ids.length > 0) {
            const permissions = await Promise.all(permission_ids.map(id => this.permissionsService.findOne(id)));
            role.permissions = permissions;
        }
        return await this.roleRepository.save(role);
    }
    async findAll() {
        return await this.roleRepository.find({
            relations: ['permissions', 'users'],
        });
    }
    async findOne(id) {
        const role = await this.roleRepository.findOne({
            where: { id },
            relations: ['permissions', 'users'],
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with ID ${id} not found`);
        }
        return role;
    }
    async update(id, updateRoleDto) {
        const { permission_ids } = updateRoleDto, roleData = __rest(updateRoleDto, ["permission_ids"]);
        const role = await this.findOne(id);
        if (permission_ids) {
            const permissions = await Promise.all(permission_ids.map(id => this.permissionsService.findOne(id)));
            role.permissions = permissions;
        }
        Object.assign(role, roleData);
        return await this.roleRepository.save(role);
    }
    async remove(id) {
        const role = await this.findOne(id);
        await this.roleRepository.remove(role);
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        permissions_service_1.PermissionsService])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map