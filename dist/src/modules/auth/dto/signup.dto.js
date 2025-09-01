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
exports.SignupAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignupAdminDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Admin User' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.Length)(2, 30, { message: 'Name must be between 2 and 30 characters' }),
    (0, class_validator_1.Matches)(/^[A-Za-z\s]+$/, { message: 'Name can only contain letters and spaces' }),
    __metadata("design:type", String)
], SignupAdminDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin@example.com' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    __metadata("design:type", String)
], SignupAdminDto.prototype, "email_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'StrongPass123!' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 100, { message: 'Password must be between 8 and 100 characters' }),
    (0, class_validator_1.Matches)(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, {
        message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number',
    }),
    __metadata("design:type", String)
], SignupAdminDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'your_device_token', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignupAdminDto.prototype, "device_token", void 0);
exports.SignupAdminDto = SignupAdminDto;
//# sourceMappingURL=signup.dto.js.map