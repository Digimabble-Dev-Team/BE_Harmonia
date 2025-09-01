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
exports.TherapistFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class TherapistFilterDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1', description: 'Page number for pagination' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TherapistFilterDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '10', description: 'Number of items per page' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TherapistFilterDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'alice', description: 'Search text for therapist name or email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TherapistFilterDto.prototype, "searchText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: [1, 2], description: 'Branch IDs to filter therapists' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value)
        ? value.map((v) => Number(v))
        : (value === null || value === void 0 ? void 0 : value.split(',').map((v) => Number(v))) || []),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], TherapistFilterDto.prototype, "branchIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Main Clinic', description: 'Branch name to filter therapists' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TherapistFilterDto.prototype, "branchName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1', description: 'Department ID to filter therapists' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TherapistFilterDto.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: [2, 3], description: 'Filter by specialization IDs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value)
        ? value.map((v) => Number(v))
        : (value === null || value === void 0 ? void 0 : value.split(',').map((v) => Number(v))) || []),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], TherapistFilterDto.prototype, "specializationIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: [1, 2], description: 'Filter by language IDs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value)
        ? value.map((v) => Number(v))
        : (value === null || value === void 0 ? void 0 : value.split(',').map((v) => Number(v))) || []),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], TherapistFilterDto.prototype, "languageIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-07-01', description: 'Filter therapists available from this date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TherapistFilterDto.prototype, "fromDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-07-31', description: 'Filter therapists available until this date' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TherapistFilterDto.prototype, "toDate", void 0);
exports.TherapistFilterDto = TherapistFilterDto;
//# sourceMappingURL=therapist-filter.dto.js.map