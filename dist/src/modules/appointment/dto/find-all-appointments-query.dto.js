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
exports.FindAllAppointmentsQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FindAllAppointmentsQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Search by patient name, email, etc.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllAppointmentsQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Page number for pagination' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAllAppointmentsQueryDto.prototype, "pagNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Number of items per page' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAllAppointmentsQueryDto.prototype, "limit", void 0);
exports.FindAllAppointmentsQueryDto = FindAllAppointmentsQueryDto;
//# sourceMappingURL=find-all-appointments-query.dto.js.map