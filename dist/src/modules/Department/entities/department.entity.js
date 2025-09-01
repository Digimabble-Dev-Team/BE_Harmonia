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
exports.Department = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const therapist_entity_1 = require("../../therapist/entities/therapist.entity");
let Department = class Department {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique identifier of the department' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Department.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cardiology', description: 'Name of the department' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Whether the department is active' }),
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Department.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Handles heart-related treatments', required: false }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => therapist_entity_1.Therapist, (therapist) => therapist.department),
    __metadata("design:type", Array)
], Department.prototype, "therapists", void 0);
Department = __decorate([
    (0, typeorm_1.Entity)({ name: 'departments' })
], Department);
exports.Department = Department;
//# sourceMappingURL=department.entity.js.map