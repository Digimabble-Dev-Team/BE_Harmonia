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
exports.Therapist = void 0;
const typeorm_1 = require("typeorm");
const department_entity_1 = require("../../Department/entities/department.entity");
const language_entity_1 = require("../../language/entities/language.entity");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const specialization_entity_1 = require("../../specialization/entities/specialization.entity");
let Therapist = class Therapist {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'therapist_id', type: 'int' }),
    __metadata("design:type", Number)
], Therapist.prototype, "therapistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Therapist.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Therapist.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'full_name',
        type: 'varchar',
        length: 200,
        generatedType: 'STORED',
        asExpression: "first_name || ' ' || last_name",
        nullable: false,
    }),
    __metadata("design:type", String)
], Therapist.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'photo', type: 'text', default: '' }),
    __metadata("design:type", String)
], Therapist.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact_email', type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Therapist.prototype, "contactEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact_phone', type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], Therapist.prototype, "contactPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'about_me', type: 'text', default: '' }),
    __metadata("design:type", String)
], Therapist.prototype, "aboutMe", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'degrees_training', type: 'text', default: '' }),
    __metadata("design:type", String)
], Therapist.prototype, "degreesTraining", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'inami_number', type: 'bigint', nullable: false }),
    __metadata("design:type", Number)
], Therapist.prototype, "inamiNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_methods', type: 'jsonb', default: () => "'[]'::jsonb" }),
    __metadata("design:type", Object)
], Therapist.prototype, "paymentMethods", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'faq', type: 'text', default: '' }),
    __metadata("design:type", String)
], Therapist.prototype, "faq", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'department_id', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Therapist.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], Therapist.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => specialization_entity_1.Specialization, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'therapist_specializations',
        joinColumn: { name: 'therapist_id', referencedColumnName: 'therapistId' },
        inverseJoinColumn: { name: 'specialization_id', referencedColumnName: 'specialization_id' },
    }),
    __metadata("design:type", Array)
], Therapist.prototype, "specializations", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => language_entity_1.Language, (language) => language.therapists, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'therapist_languages',
        joinColumn: { name: 'therapist_id', referencedColumnName: 'therapistId' },
        inverseJoinColumn: { name: 'language_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Therapist.prototype, "languages", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => branch_entity_1.Branch, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'therapist_branches',
        joinColumn: { name: 'therapist_id', referencedColumnName: 'therapistId' },
        inverseJoinColumn: { name: 'branch_id', referencedColumnName: 'branch_id' },
    }),
    __metadata("design:type", Array)
], Therapist.prototype, "branches", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'availability', type: 'jsonb', default: () => "'[]'::jsonb" }),
    __metadata("design:type", Array)
], Therapist.prototype, "availability", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_delete', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Therapist.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Therapist.prototype, "deletedAt", void 0);
Therapist = __decorate([
    (0, typeorm_1.Entity)('therapists')
], Therapist);
exports.Therapist = Therapist;
//# sourceMappingURL=therapist.entity.js.map