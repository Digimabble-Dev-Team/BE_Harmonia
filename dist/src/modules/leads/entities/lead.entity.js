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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lead = exports.LeadStatus = exports.LeadSource = void 0;
const BaseModel_1 = require("../../../core/database/BaseModel");
const patient_entity_1 = require("../../customers/entities/patient.entity");
const property_entity_1 = __importDefault(require("../../properties/entities/property.entity"));
const typeorm_1 = require("typeorm");
var LeadSource;
(function (LeadSource) {
    LeadSource["WEBSITE"] = "Website";
    LeadSource["REFERRAL"] = "Referral";
    LeadSource["CAMPAIGN"] = "Campaign";
    LeadSource["WALK_IN"] = "Walk-in";
    LeadSource["SOCIAL_MEDIA"] = "Social Media";
    LeadSource["PHONE_CALL"] = "Phone Call";
    LeadSource["EMAIL"] = "Email";
})(LeadSource = exports.LeadSource || (exports.LeadSource = {}));
var LeadStatus;
(function (LeadStatus) {
    LeadStatus["NEW"] = "New";
    LeadStatus["CONTACTED"] = "Contacted";
    LeadStatus["QUALIFIED"] = "Qualified";
    LeadStatus["PROPOSAL_SENT"] = "Proposal Sent";
    LeadStatus["NEGOTIATION"] = "Negotiation";
    LeadStatus["CLOSED_WON"] = "Closed Won";
    LeadStatus["CLOSED_LOST"] = "Closed Lost";
    LeadStatus["FOLLOW_UP"] = "Follow Up";
})(LeadStatus = exports.LeadStatus || (exports.LeadStatus = {}));
let Lead = class Lead extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: LeadSource,
        default: LeadSource.WEBSITE
    }),
    __metadata("design:type", String)
], Lead.prototype, "lead_source", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: LeadStatus,
        default: LeadStatus.NEW
    }),
    __metadata("design:type", String)
], Lead.prototype, "lead_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Lead.prototype, "budget_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "preferred_contact_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Lead.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Lead.prototype, "date_of_inquiry", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", patient_entity_1.Patient)
], Lead.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_entity_1.default, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
    __metadata("design:type", property_entity_1.default)
], Lead.prototype, "interested_property", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Lead.prototype, "is_deleted", void 0);
Lead = __decorate([
    (0, typeorm_1.Entity)({ name: 'leads' })
], Lead);
exports.Lead = Lead;
//# sourceMappingURL=lead.entity.js.map