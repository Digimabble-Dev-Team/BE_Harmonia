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
exports.TeamMember = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("../../users/entities/user.entity"));
let TeamMember = class TeamMember {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TeamMember.prototype, "team_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "job_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "specific_audience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "specialization_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "job_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "job_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "job_4", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "who_am_i", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "consultations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "office_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "contact_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "contact_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: false, default: {} }),
    __metadata("design:type", Object)
], TeamMember.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, nullable: false, default: '{}' }),
    __metadata("design:type", Array)
], TeamMember.prototype, "languages_spoken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, nullable: false, default: '{}' }),
    __metadata("design:type", Array)
], TeamMember.prototype, "payment_methods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, nullable: false, default: '{}' }),
    __metadata("design:type", Array)
], TeamMember.prototype, "diplomas_and_training", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, nullable: false, default: '{}' }),
    __metadata("design:type", Array)
], TeamMember.prototype, "specializations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: false, default: {} }),
    __metadata("design:type", Object)
], TeamMember.prototype, "frequently_asked_questions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, nullable: false, default: '{}' }),
    __metadata("design:type", Array)
], TeamMember.prototype, "calendar_links", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, default: '' }),
    __metadata("design:type", String)
], TeamMember.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], TeamMember.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], TeamMember.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.default, (user) => user.team),
    __metadata("design:type", Array)
], TeamMember.prototype, "users", void 0);
TeamMember = __decorate([
    (0, typeorm_1.Entity)('team_member_list')
], TeamMember);
exports.TeamMember = TeamMember;
//# sourceMappingURL=team-member.entity.js.map