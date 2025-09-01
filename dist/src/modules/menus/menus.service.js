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
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_entity_1 = require("./entities/menu.entity");
const permissions_service_1 = require("../permissions/permissions.service");
let MenusService = class MenusService {
    constructor(menuRepository, permissionsService) {
        this.menuRepository = menuRepository;
        this.permissionsService = permissionsService;
    }
    async create(createMenuDto) {
        const { permission_ids } = createMenuDto, menuData = __rest(createMenuDto, ["permission_ids"]);
        const menu = this.menuRepository.create(menuData);
        if (permission_ids && permission_ids.length > 0) {
            const permissions = await Promise.all(permission_ids.map(id => this.permissionsService.findOne(id)));
            menu.permissions = permissions;
        }
        return await this.menuRepository.save(menu);
    }
    async findAll() {
        return await this.menuRepository.find({
            relations: ['parent', 'children', 'permissions'],
            order: {
                order: 'ASC',
            },
        });
    }
    async findOne(id) {
        const menu = await this.menuRepository.findOne({
            where: { id },
            relations: ['parent', 'children', 'permissions'],
        });
        if (!menu) {
            throw new common_1.NotFoundException(`Menu with ID ${id} not found`);
        }
        return menu;
    }
    async update(id, updateMenuDto) {
        const { permission_ids } = updateMenuDto, menuData = __rest(updateMenuDto, ["permission_ids"]);
        const menu = await this.findOne(id);
        if (permission_ids) {
            const permissions = await Promise.all(permission_ids.map(id => this.permissionsService.findOne(id)));
            menu.permissions = permissions;
        }
        Object.assign(menu, menuData);
        return await this.menuRepository.save(menu);
    }
    async remove(id) {
        const menu = await this.findOne(id);
        await this.menuRepository.remove(menu);
    }
};
MenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        permissions_service_1.PermissionsService])
], MenusService);
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map