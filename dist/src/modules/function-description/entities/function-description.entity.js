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
exports.FunctionDescription = void 0;
const typeorm_1 = require("typeorm");
const consultation_entity_1 = require("../../consultations/entities/consultation.entity");
const therapist_entity_1 = require("../../therapist/entities/therapist.entity");
let FunctionDescription = class FunctionDescription {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FunctionDescription.prototype, "function_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "fonction", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'function_description', type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "function_description_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "simplification_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "communication_patients", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "tone_communication", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_4", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_5", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_6", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_7", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_8", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FunctionDescription.prototype, "professional_9", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => consultation_entity_1.Consultation, (consultation) => consultation.function_descriptions),
    (0, typeorm_1.JoinColumn)({ name: 'consultation_id' }),
    __metadata("design:type", consultation_entity_1.Consultation)
], FunctionDescription.prototype, "consultation", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => therapist_entity_1.Therapist),
    (0, typeorm_1.JoinTable)({
        name: 'function_description_therapists',
        joinColumn: { name: 'function_id', referencedColumnName: 'function_id' },
        inverseJoinColumn: { name: '_key', referencedColumnName: '_key' },
    }),
    __metadata("design:type", Array)
], FunctionDescription.prototype, "therapists", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, select: true }),
    __metadata("design:type", Boolean)
], FunctionDescription.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, select: false }),
    __metadata("design:type", Boolean)
], FunctionDescription.prototype, "is_deleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', select: true }),
    __metadata("design:type", Date)
], FunctionDescription.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', select: false }),
    __metadata("design:type", Date)
], FunctionDescription.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true, select: false }),
    __metadata("design:type", Date)
], FunctionDescription.prototype, "deleted_at", void 0);
FunctionDescription = __decorate([
    (0, typeorm_1.Entity)({ name: 'function_description' })
], FunctionDescription);
exports.FunctionDescription = FunctionDescription;
//# sourceMappingURL=function-description.entity.js.map