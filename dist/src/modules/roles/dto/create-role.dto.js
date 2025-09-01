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
exports.CreateRoleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateRoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'admin',
        description: 'The name of the role',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Administrator with full system access',
        description: 'A description of the role and its responsibilities',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Whether this is a default role assigned to new users',
        required: false,
        default: false
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateRoleDto.prototype, "is_default", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['123e4567-e89b-12d3-a456-426614174000'],
        description: 'Array of permission IDs to be assigned to this role',
        required: false,
        type: [String]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateRoleDto.prototype, "permission_ids", void 0);
exports.CreateRoleDto = CreateRoleDto;
//# sourceMappingURL=create-role.dto.js.map