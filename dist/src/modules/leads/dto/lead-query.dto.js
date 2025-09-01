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
exports.LeadQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const lead_entity_1 = require("../entities/lead.entity");
class LeadQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        required: false,
        description: 'Page number for pagination',
        minimum: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'Page number must be a valid number' }),
    (0, class_validator_1.Min)(1, { message: 'Page number must be at least 1' }),
    __metadata("design:type", Number)
], LeadQueryDto.prototype, "pagNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        required: false,
        description: 'Number of items per page',
        minimum: 1,
        maximum: 100
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'Limit must be a valid number' }),
    (0, class_validator_1.Min)(1, { message: 'Limit must be at least 1' }),
    (0, class_validator_1.Max)(100, { message: 'Limit cannot exceed 100' }),
    __metadata("design:type", Number)
], LeadQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'New',
        required: false,
        enum: lead_entity_1.LeadStatus,
        description: 'Filter by lead status'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(lead_entity_1.LeadStatus, { message: 'Invalid lead status' }),
    __metadata("design:type", String)
], LeadQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john',
        required: false,
        description: 'Search text to filter leads'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Search text must be a string' }),
    __metadata("design:type", String)
], LeadQueryDto.prototype, "searchText", void 0);
exports.LeadQueryDto = LeadQueryDto;
//# sourceMappingURL=lead-query.dto.js.map