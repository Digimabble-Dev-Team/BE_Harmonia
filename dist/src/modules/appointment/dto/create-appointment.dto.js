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
exports.CreateAppointmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const appointment_entity_1 = require("../entities/appointment.entity");
class CreateAppointmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID of the existing branch' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "branchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "db571dc0-1164-4528-bcd5-3d909aff3511", description: 'ID (UUID) of the existing customer' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "patientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-11-15', description: 'Date of appointment (YYYY-MM-DD)' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11:00 - 11:30', description: 'Time slot for the appointment' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "timeslot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: appointment_entity_1.PurposeOfVisit, example: appointment_entity_1.PurposeOfVisit.CONSULTATION, description: 'Reason for the visit' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(appointment_entity_1.PurposeOfVisit),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "purposeOfVisit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: appointment_entity_1.Department, example: appointment_entity_1.Department.PHYSIOTHERAPY, description: 'Relevant department' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(appointment_entity_1.Department),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Patient reports recurring back pain.', description: 'Optional details' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'ID of the appointed therapist' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "therapistKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "db571dc0-1164-4528-bcd5-3d909aff3511", description: 'ID (UUID) of the team member creating the appointment (usually from auth token)' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "createdById", void 0);
exports.CreateAppointmentDto = CreateAppointmentDto;
//# sourceMappingURL=create-appointment.dto.js.map