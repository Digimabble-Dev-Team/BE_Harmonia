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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("../../../core/database/BaseModel");
const role_entity_1 = require("../../roles/entities/role.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
let Permission = class Permission extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Permission.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Permission.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Permission.prototype, "resource", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, role => role.permissions),
    __metadata("design:type", Array)
], Permission.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_entity_1.Menu, menu => menu.permissions),
    (0, typeorm_1.JoinTable)({
        name: 'permission_menus',
        joinColumn: { name: 'permission_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'menu_id', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Permission.prototype, "menus", void 0);
Permission = __decorate([
    (0, typeorm_1.Entity)('permissions')
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=permission.entity.js.map