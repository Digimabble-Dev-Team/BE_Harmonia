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
exports.UpdateCompanyProfileDto = exports.CompanyProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_address_dto_1 = require("../../addresses/dto/create-address.dto");
class CompanyProfileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Real Estate Co.' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyProfileDto.prototype, "company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyProfileDto.prototype, "mobile_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://realestate.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CompanyProfileDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TX12345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyProfileDto.prototype, "tax_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'data:image/png;base64,iVBORw0KGgo...' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyProfileDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", create_address_dto_1.CreateAddressDto)
], CompanyProfileDto.prototype, "address", void 0);
exports.CompanyProfileDto = CompanyProfileDto;
class UpdateCompanyProfileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Real Estate Co.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCompanyProfileDto.prototype, "company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCompanyProfileDto.prototype, "mobile_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://realestate.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateCompanyProfileDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TX12345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCompanyProfileDto.prototype, "tax_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'data:image/png;base64,iVBORw0KGgo...' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCompanyProfileDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: create_address_dto_1.CreateAddressDto, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", create_address_dto_1.CreateAddressDto)
], UpdateCompanyProfileDto.prototype, "address", void 0);
exports.UpdateCompanyProfileDto = UpdateCompanyProfileDto;
//# sourceMappingURL=company-profile.dto.js.map