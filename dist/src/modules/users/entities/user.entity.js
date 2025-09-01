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
const typeorm_1 = require("typeorm");
const encryption_1 = __importDefault(require("../../../core/utils/encryption"));
const class_transformer_1 = require("class-transformer");
const team_member_entity_1 = require("../../team-member/entities/team-member.entity");
let User = class User {
    async hashPassword() {
        if (this.password) {
            this.password = encryption_1.default.hashPassword(this.password);
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], User.prototype, "email_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ type: 'varchar', select: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], User.prototype, "team_id", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_member_entity_1.TeamMember, (teamMember) => teamMember.users, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    __metadata("design:type", team_member_entity_1.TeamMember)
], User.prototype, "team", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
exports.default = User;
//# sourceMappingURL=user.entity.js.map