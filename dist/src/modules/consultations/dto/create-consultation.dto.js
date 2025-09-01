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
exports.CreateConsultationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateConsultationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'General Check-up' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "our_consultations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A comprehensive general health check-up.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Adults and Children' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "for_whom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Initial assessment, followed by tests if required.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "care_process", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fee: $100. Insurance coverage may apply.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "fees_and_reimbursements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The ID of the branch this consultation belongs to.' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateConsultationDto.prototype, "branch_id", void 0);
exports.CreateConsultationDto = CreateConsultationDto;
//# sourceMappingURL=create-consultation.dto.js.map