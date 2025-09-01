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
exports.CreateTherapistDto = exports.AvailabilityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AvailabilityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Monday' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AvailabilityDto.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '09:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AvailabilityDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '17:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AvailabilityDto.prototype, "endTime", void 0);
exports.AvailabilityDto = AvailabilityDto;
class CreateTherapistDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'https://example.com/photos/john.jpg' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "aboutMe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "degreesTraining", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 987654321 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTherapistDto.prototype, "inamiNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateTherapistDto.prototype, "paymentMethods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTherapistDto.prototype, "faq", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'Reference to Department ID' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTherapistDto.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2, 3], description: 'Specialization IDs for therapist' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreateTherapistDto.prototype, "specializations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['English', 'French'], description: 'Languages spoken by therapist' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTherapistDto.prototype, "languages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2], description: 'Array of branch IDs for therapist' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreateTherapistDto.prototype, "branches", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [AvailabilityDto],
        required: false,
        example: [
            { day: 'Monday', startTime: '09:00', endTime: '17:00' },
            { day: 'Wednesday', startTime: '10:00', endTime: '16:00' },
        ],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AvailabilityDto),
    __metadata("design:type", Array)
], CreateTherapistDto.prototype, "availability", void 0);
exports.CreateTherapistDto = CreateTherapistDto;
//# sourceMappingURL=create-therapist.dto.js.map