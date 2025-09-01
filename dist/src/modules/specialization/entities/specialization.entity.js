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
exports.Specialization = exports.SpecializationType = void 0;
const typeorm_1 = require("typeorm");
const department_entity_1 = require("../../Department/entities/department.entity");
var SpecializationType;
(function (SpecializationType) {
    SpecializationType["CONSULTATION"] = "Consultation";
    SpecializationType["OPERATION"] = "Operation";
    SpecializationType["OTHER"] = "Other";
})(SpecializationType = exports.SpecializationType || (exports.SpecializationType = {}));
let Specialization = class Specialization {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Specialization.prototype, "specialization_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], Specialization.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: SpecializationType,
    }),
    __metadata("design:type", String)
], Specialization.prototype, "specialization_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Specialization.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Specialization.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, select: false }),
    __metadata("design:type", Boolean)
], Specialization.prototype, "is_deleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', select: true }),
    __metadata("design:type", Date)
], Specialization.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', select: false }),
    __metadata("design:type", Date)
], Specialization.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true, select: false }),
    __metadata("design:type", Date)
], Specialization.prototype, "deleted_at", void 0);
Specialization = __decorate([
    (0, typeorm_1.Entity)({ name: 'specializations' })
], Specialization);
exports.Specialization = Specialization;
//# sourceMappingURL=specialization.entity.js.map