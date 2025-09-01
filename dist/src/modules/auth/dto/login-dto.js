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
exports.ResendEmailDto = exports.VerifyEmailDto = exports.userlogoutDto = exports.DeleteDto = exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sample@gmail.com' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "device_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, required: false, description: 'Set to true for an extended session duration.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], LoginDto.prototype, "remember_me", void 0);
exports.LoginDto = LoginDto;
class DeleteDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Enter your email (or) mobile number include (+91)' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeleteDto.prototype, "identity", void 0);
exports.DeleteDto = DeleteDto;
class userlogoutDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], userlogoutDto.prototype, "user_id", void 0);
exports.userlogoutDto = userlogoutDto;
class VerifyEmailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], VerifyEmailDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], VerifyEmailDto.prototype, "otp", void 0);
exports.VerifyEmailDto = VerifyEmailDto;
class ResendEmailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sample@gmail.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ResendEmailDto.prototype, "email", void 0);
exports.ResendEmailDto = ResendEmailDto;
//# sourceMappingURL=login-dto.js.map