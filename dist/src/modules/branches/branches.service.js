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
exports.BranchesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const branch_entity_1 = require("./entities/branch.entity");
const constants_1 = require("../../core/constants");
let BranchesService = class BranchesService {
    constructor(branchRepository) {
        this.branchRepository = branchRepository;
    }
    async create(createBranchDto) {
        try {
            const branch = this.branchRepository.create(createBranchDto);
            return await this.branchRepository.save(branch);
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505') {
                throw new common_1.ConflictException('Branch with this email already exists');
            }
            throw new common_1.InternalServerErrorException(constants_1.EM100);
        }
    }
    async findAll(page, limit, search) {
        const skip = (page - 1) * limit;
        const where = search
            ? [
                { name: (0, typeorm_2.ILike)(`%${search}%`) },
                { email: (0, typeorm_2.ILike)(`%${search}%`) },
                { phone: (0, typeorm_2.ILike)(`%${search}%`) },
            ]
            : {};
        const [data, total] = await this.branchRepository.findAndCount({
            where,
            skip,
            take: limit,
        });
        return { data, total };
    }
    async findOne(branch_id) {
        const branch = await this.branchRepository.findOne({ where: { branch_id } });
        if (!branch) {
            throw new common_1.NotFoundException(constants_1.EM119);
        }
        return branch;
    }
    async update(branch_id, updateBranchDto) {
        const branch = await this.findOne(branch_id);
        try {
            this.branchRepository.merge(branch, updateBranchDto);
            return await this.branchRepository.save(branch);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('A branch with this email already exists.');
            }
            throw new common_1.InternalServerErrorException(constants_1.EM100);
        }
    }
    async remove(branch_id) {
        const branch = await this.findOne(branch_id);
        await this.branchRepository.remove(branch);
    }
};
BranchesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(branch_entity_1.Branch)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BranchesService);
exports.BranchesService = BranchesService;
//# sourceMappingURL=branches.service.js.map