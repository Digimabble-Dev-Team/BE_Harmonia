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
exports.SignupAgentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_address_dto_1 = require("../../addresses/dto/create-address.dto");
class SignupAgentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Agent User' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.Length)(2, 30, { message: 'Name must be between 2 and 30 characters' }),
    (0, class_validator_1.Matches)(/^[A-Za-z\s]+$/, { message: 'Name can only contain letters and spaces' }),
    __metadata("design:type", String)
], SignupAgentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'agent@example.com' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    __metadata("design:type", String)
], SignupAgentDto.prototype, "email_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'StrongPass123!' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 100, { message: 'Password must be between 8 and 100 characters' }),
    (0, class_validator_1.Matches)(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, {
        message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number',
    }),
    __metadata("design:type", String)
], SignupAgentDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignupAgentDto.prototype, "mobile_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: create_address_dto_1.CreateAddressDto,
        description: 'Address is required when registering as an agent'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_address_dto_1.CreateAddressDto),
    __metadata("design:type", create_address_dto_1.CreateAddressDto)
], SignupAgentDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'your_device_token', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignupAgentDto.prototype, "device_token", void 0);
exports.SignupAgentDto = SignupAgentDto;
//# sourceMappingURL=signup-agent.dto.js.map