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
exports.Patient = void 0;
const typeorm_1 = require("typeorm");
const therapist_entity_1 = require("../../therapist/entities/therapist.entity");
let Patient = class Patient {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "middlename", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "ssin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "legalgender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Patient.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "primarypatientrecordid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "mutualitynumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "mutualityregistrationnumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, nullable: true }),
    __metadata("design:type", Array)
], Patient.prototype, "phones", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "zipcode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false, default: '' }),
    __metadata("design:type", String)
], Patient.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => therapist_entity_1.Therapist, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'therapist_id' }),
    __metadata("design:type", therapist_entity_1.Therapist)
], Patient.prototype, "therapist", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Patient.prototype, "therapistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Patient.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Patient.prototype, "deleted_at", void 0);
Patient = __decorate([
    (0, typeorm_1.Entity)({ name: 'patients' })
], Patient);
exports.Patient = Patient;
//# sourceMappingURL=patient.entity.js.map