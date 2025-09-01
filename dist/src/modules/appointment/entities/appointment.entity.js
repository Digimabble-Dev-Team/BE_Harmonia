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
exports.Department = exports.PurposeOfVisit = void 0;
const BaseModel_1 = require("../../../core/database/BaseModel");
const typeorm_1 = require("typeorm");
const therapist_entity_1 = require("../../therapist/entities/therapist.entity");
const patient_entity_1 = require("../../customers/entities/patient.entity");
const team_member_entity_1 = require("../../team-member/entities/team-member.entity");
const branch_entity_1 = require("../../branches/entities/branch.entity");
var PurposeOfVisit;
(function (PurposeOfVisit) {
    PurposeOfVisit["CONSULTATION"] = "Consultation";
    PurposeOfVisit["FOLLOW_UP"] = "Follow-up";
    PurposeOfVisit["THERAPY_SESSION"] = "Therapy Session";
    PurposeOfVisit["INITIAL_ASSESSMENT"] = "Initial Assessment";
})(PurposeOfVisit = exports.PurposeOfVisit || (exports.PurposeOfVisit = {}));
var Department;
(function (Department) {
    Department["PSYCHOLOGY"] = "Psychology";
    Department["PHYSIOTHERAPY"] = "Physiotherapy";
    Department["NUTRITION"] = "Nutrition";
    Department["GENERAL_MEDICINE"] = "General Medicine";
})(Department = exports.Department || (exports.Department = {}));
let Appointment = class Appointment extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'branch_id' }),
    __metadata("design:type", branch_entity_1.Branch)
], Appointment.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
    __metadata("design:type", patient_entity_1.Patient)
], Appointment.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Appointment.prototype, "timeslot", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: PurposeOfVisit,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "purposeOfVisit", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Department,
    }),
    __metadata("design:type", String)
], Appointment.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => therapist_entity_1.Therapist, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'therapist_id' }),
    __metadata("design:type", therapist_entity_1.Therapist)
], Appointment.prototype, "therapist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_member_entity_1.TeamMember, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by_id' }),
    __metadata("design:type", team_member_entity_1.TeamMember)
], Appointment.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_member_entity_1.TeamMember, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'modified_by_id' }),
    __metadata("design:type", team_member_entity_1.TeamMember)
], Appointment.prototype, "modifiedBy", void 0);
Appointment = __decorate([
    (0, typeorm_1.Entity)({ name: 'appointments' })
], Appointment);
exports.default = Appointment;
//# sourceMappingURL=appointment.entity.js.map