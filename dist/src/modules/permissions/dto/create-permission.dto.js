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
exports.CreatePermissionDto = exports.PermissionAction = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var PermissionAction;
(function (PermissionAction) {
    PermissionAction["CREATE"] = "CREATE";
    PermissionAction["READ"] = "READ";
    PermissionAction["UPDATE"] = "UPDATE";
    PermissionAction["DELETE"] = "DELETE";
})(PermissionAction = exports.PermissionAction || (exports.PermissionAction = {}));
class CreatePermissionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'manage_users',
        description: 'The name of the permission',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Allows managing user accounts',
        description: 'A description of what this permission allows',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'CREATE',
        description: 'The type of action this permission grants',
        enum: PermissionAction,
        required: true
    }),
    (0, class_validator_1.IsEnum)(PermissionAction),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'users',
        description: 'The resource this permission applies to',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "resource", void 0);
exports.CreatePermissionDto = CreatePermissionDto;
//# sourceMappingURL=create-permission.dto.js.map