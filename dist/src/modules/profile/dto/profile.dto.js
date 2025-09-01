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
exports.ProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = __importDefault(require("../../users/entities/user.entity"));
const team_member_entity_1 = require("../../team-member/entities/team-member.entity");
class ProfileDto {
    constructor(user, team) {
        this.user = user;
        this.team = team;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.default }),
    __metadata("design:type", user_entity_1.default)
], ProfileDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => team_member_entity_1.TeamMember }),
    __metadata("design:type", team_member_entity_1.TeamMember)
], ProfileDto.prototype, "team", void 0);
exports.ProfileDto = ProfileDto;
//# sourceMappingURL=profile.dto.js.map