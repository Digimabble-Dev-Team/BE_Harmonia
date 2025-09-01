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
exports.CreateSpecializationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const specialization_entity_1 = require("../entities/specialization.entity");
class CreateSpecializationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reference to Department' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSpecializationDto.prototype, "department_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: specialization_entity_1.SpecializationType,
        description: 'Type of specialization',
    }),
    (0, class_validator_1.IsEnum)(specialization_entity_1.SpecializationType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSpecializationDto.prototype, "specialization_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra info about this specialization',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSpecializationDto.prototype, "description", void 0);
exports.CreateSpecializationDto = CreateSpecializationDto;
//# sourceMappingURL=create-specialization.dto.js.map