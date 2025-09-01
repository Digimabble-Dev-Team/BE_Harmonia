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
var Menu_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("../../../core/database/BaseModel");
const permission_entity_1 = require("../../permissions/entities/permission.entity");
let Menu = Menu_1 = class Menu extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Menu.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Menu.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Menu.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Menu.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Menu.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Menu.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Menu.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Menu.prototype, "is_visible", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Menu_1, menu => menu.children),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", Menu)
], Menu.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Menu_1, menu => menu.parent),
    __metadata("design:type", Array)
], Menu.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.Permission, permission => permission.menus),
    __metadata("design:type", Array)
], Menu.prototype, "permissions", void 0);
Menu = Menu_1 = __decorate([
    (0, typeorm_1.Entity)('menus')
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.entity.js.map