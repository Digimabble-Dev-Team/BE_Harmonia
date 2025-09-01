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
exports.CreatePatientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePatientDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Middle' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '94060768059' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "ssin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'M' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "legalgender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'en' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'primary_record_123' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "primarypatientrecordid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Some note about the patient' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "note", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ACTIVE' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "mutualitynumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '67890' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "mutualityregistrationnumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "emails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'BE' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Brussels' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rue du Comté' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5140' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1994-06-07' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "birthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['+32491079736'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreatePatientDto.prototype, "phones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Optional therapist ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePatientDto.prototype, "therapistId", void 0);
exports.CreatePatientDto = CreatePatientDto;
//# sourceMappingURL=create-patient.dto.js.map