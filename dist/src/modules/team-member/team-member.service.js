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
exports.TeamMemberService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const team_member_entity_1 = require("./entities/team-member.entity");
let TeamMemberService = class TeamMemberService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return this.repo.find({
            where: { is_delete: false },
        });
    }
    async findOne(id) {
        const member = await this.repo.findOne({
            where: { team_id: id, is_delete: false },
        });
        if (!member)
            throw new common_1.NotFoundException(`Team member with ID ${id} not found`);
        return member;
    }
    async create(data) {
        const member = this.repo.create(data);
        return this.repo.save(member);
    }
    async update(id, data) {
        const member = await this.findOne(id);
        Object.assign(member, data);
        return this.repo.save(member);
    }
    async search(query) {
        return this.repo.find({
            where: [
                { first_name: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { last_name: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { full_name: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { job_1: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { job_2: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { job_3: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { job_4: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { specialization_1: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { office_address: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { contact_email: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { contact_phone: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
                { about: (0, typeorm_2.ILike)(`%${query}%`), is_delete: false },
            ],
        });
    }
    async remove(id) {
        const member = await this.findOne(id);
        member.is_delete = true;
        member.deleted_at = new Date();
        await this.repo.save(member);
    }
    async restore(id) {
        const member = await this.repo.findOne({ where: { team_id: id, is_delete: true } });
        if (!member)
            throw new common_1.NotFoundException(`Team member with ID ${id} not found or not deleted`);
        member.is_delete = false;
        member.deleted_at = null;
        return this.repo.save(member);
    }
};
TeamMemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_member_entity_1.TeamMember)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamMemberService);
exports.TeamMemberService = TeamMemberService;
//# sourceMappingURL=team-member.service.js.map