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
exports.CreateMenuDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMenuDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'User Management',
        description: 'The name of the menu item',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Manage user accounts and permissions',
        description: 'A description of the menu item',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '/admin/users',
        description: 'The URL path for this menu item',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user',
        description: 'The icon name or class for this menu item',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the parent menu item (if this is a submenu)',
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMenuDto.prototype, "parent_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The display order of this menu item',
        required: false,
        default: 0
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMenuDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Whether this menu item is active',
        required: false,
        default: true
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateMenuDto.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Whether this menu item should be visible in the navigation',
        required: false,
        default: false
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateMenuDto.prototype, "is_visible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['123e4567-e89b-12d3-a456-426614174000'],
        description: 'Array of permission IDs required to access this menu item',
        required: false,
        type: [String]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateMenuDto.prototype, "permission_ids", void 0);
exports.CreateMenuDto = CreateMenuDto;
//# sourceMappingURL=create-menu.dto.js.map