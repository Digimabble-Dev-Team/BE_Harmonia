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
exports.CreateLeadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const lead_entity_1 = require("../entities/lead.entity");
class CreateLeadDto {
    constructor() {
        this.is_active = true;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: lead_entity_1.LeadSource.WEBSITE,
        enum: lead_entity_1.LeadSource,
        description: 'Source of the lead'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Select a lead source.' }),
    (0, class_validator_1.IsEnum)(lead_entity_1.LeadSource, { message: 'Select a lead source.' }),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "lead_source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: lead_entity_1.LeadStatus.NEW,
        enum: lead_entity_1.LeadStatus,
        description: 'Current status of the lead'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Select the current status of the lead.' }),
    (0, class_validator_1.IsEnum)(lead_entity_1.LeadStatus, { message: 'Select the current status of the lead.' }),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "lead_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID of existing customer from customers table' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Select a customer.' }),
    (0, class_validator_1.IsInt)({ message: 'Customer ID must be a valid integer.' }),
    (0, class_validator_1.IsPositive)({ message: 'Customer ID must be a positive number.' }),
    __metadata("design:type", Number)
], CreateLeadDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID of the property from properties table' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Select a property of interest.' }),
    (0, class_validator_1.IsInt)({ message: 'Property ID must be a valid integer.' }),
    (0, class_validator_1.IsPositive)({ message: 'Property ID must be a positive number.' }),
    __metadata("design:type", Number)
], CreateLeadDto.prototype, "interested_property_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500000, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Enter a valid budget.' }),
    (0, class_validator_1.IsPositive)({ message: 'Enter a valid budget.' }),
    __metadata("design:type", Number)
], CreateLeadDto.prototype, "budget_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '14:30', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: 'Enter a valid contact time.' }),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "preferred_contact_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Customer is interested in waterfront properties', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500, { message: 'Notes should be under 500 characters.' }),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-06-09' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Date of inquiry is required.' }),
    (0, class_validator_1.IsDateString)({}, { message: 'Enter a valid date.' }),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "date_of_inquiry", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateLeadDto.prototype, "is_active", void 0);
exports.CreateLeadDto = CreateLeadDto;
//# sourceMappingURL=create-lead.dto.js.map