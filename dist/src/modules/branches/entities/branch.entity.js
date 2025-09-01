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
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
const consultation_entity_1 = require("../../consultations/entities/consultation.entity");
const therapist_entity_1 = require("../../therapist/entities/therapist.entity");
let Branch = class Branch {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Branch.prototype, "branch_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Branch.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Branch.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], Branch.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Branch.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consultation_entity_1.Consultation, (consultation) => consultation.branch),
    __metadata("design:type", Array)
], Branch.prototype, "consultations", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => therapist_entity_1.Therapist, (therapist) => therapist.branches),
    __metadata("design:type", Array)
], Branch.prototype, "therapists", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, select: true }),
    __metadata("design:type", Boolean)
], Branch.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, select: false }),
    __metadata("design:type", Boolean)
], Branch.prototype, "is_deleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', select: true }),
    __metadata("design:type", Date)
], Branch.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', select: false }),
    __metadata("design:type", Date)
], Branch.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true, select: false }),
    __metadata("design:type", Date)
], Branch.prototype, "deleted_at", void 0);
Branch = __decorate([
    (0, typeorm_1.Entity)({ name: 'branches' })
], Branch);
exports.Branch = Branch;
//# sourceMappingURL=branch.entity.js.map