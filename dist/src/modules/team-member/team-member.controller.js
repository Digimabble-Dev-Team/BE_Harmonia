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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberController = void 0;
const common_1 = require("@nestjs/common");
const team_member_service_1 = require("./team-member.service");
const team_member_entity_1 = require("./entities/team-member.entity");
const create_team_member_dto_1 = require("./dto/create-team-member.dto");
const update_team_member_dto_1 = require("./dto/update-team-member.dto");
const swagger_1 = require("@nestjs/swagger");
let TeamMemberController = class TeamMemberController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(id, data) {
        return this.service.update(id, data);
    }
    search(q) {
        return this.service.search(q);
    }
    remove(id) {
        return this.service.remove(id);
    }
    restore(id) {
        return this.service.restore(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active (non-deleted) team members' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of team members', type: [team_member_entity_1.TeamMember] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get team member by ID (only if not deleted)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Team member found', type: team_member_entity_1.TeamMember }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team member not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new team member' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Team member created', type: team_member_entity_1.TeamMember }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_member_dto_1.CreateTeamMemberDto]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update team member (partial)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Team member updated', type: team_member_entity_1.TeamMember }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team member not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_team_member_dto_1.UpdateTeamMemberDto]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search team members by name, job, specialization, etc.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of matching team members', type: [team_member_entity_1.TeamMember] }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "search", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete a team member' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Team member soft deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team member not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, swagger_1.ApiOperation)({ summary: 'Restore a soft-deleted team member' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "restore", null);
TeamMemberController = __decorate([
    (0, swagger_1.ApiTags)('team-members'),
    (0, common_1.Controller)('team-members'),
    __metadata("design:paramtypes", [team_member_service_1.TeamMemberService])
], TeamMemberController);
exports.TeamMemberController = TeamMemberController;
//# sourceMappingURL=team-member.controller.js.map