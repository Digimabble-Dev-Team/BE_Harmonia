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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const specialization_entity_1 = require("./entities/specialization.entity");
const constants_1 = require("../../core/constants");
const department_entity_1 = require("../Department/entities/department.entity");
let SpecializationService = class SpecializationService {
    constructor(specializationRepository, departmentRepository) {
        this.specializationRepository = specializationRepository;
        this.departmentRepository = departmentRepository;
    }
    async create(createDto) {
        try {
            const { department_id } = createDto, rest = __rest(createDto, ["department_id"]);
            const department = await this.departmentRepository.findOne({
                where: { id: department_id },
            });
            if (!department) {
                throw new common_1.BadRequestException(`Department with ID ${department_id} not found`);
            }
            const specialization = this.specializationRepository.create(Object.assign(Object.assign({}, rest), { department }));
            return await this.specializationRepository.save(specialization);
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(constants_1.EM100);
        }
    }
    async findAll(page, limit, search) {
        const skip = (page - 1) * limit;
        const query = this.specializationRepository.createQueryBuilder('specialization')
            .leftJoinAndSelect('specialization.department', 'department');
        if (search) {
            query.andWhere(new typeorm_2.Brackets(qb => {
                qb.where('specialization.specialization_type::text ILIKE :search', { search: `%${search}%` })
                    .orWhere('specialization.description ILIKE :search', { search: `%${search}%` })
                    .orWhere('department.name ILIKE :search', { search: `%${search}%` });
            }));
        }
        const [data, total] = await query
            .skip(skip)
            .take(limit)
            .getManyAndCount();
        return { data, total };
    }
    async findOne(specialization_id) {
        const specialization = await this.specializationRepository.findOne({
            where: { specialization_id },
            relations: ['department'],
        });
        if (!specialization) {
            throw new common_1.NotFoundException(constants_1.EM119);
        }
        return specialization;
    }
    async update(specialization_id, updateDto) {
        const specialization = await this.findOne(specialization_id);
        const { department_id } = updateDto, rest = __rest(updateDto, ["department_id"]);
        if (department_id && department_id !== specialization.department.id) {
            const department = await this.departmentRepository.findOne({ where: { id: department_id } });
            if (!department) {
                throw new common_1.BadRequestException(`Department with ID ${department_id} not found`);
            }
            specialization.department = department;
        }
        this.specializationRepository.merge(specialization, rest);
        return this.specializationRepository.save(specialization);
    }
    async remove(specialization_id) {
        const specialization = await this.findOne(specialization_id);
        await this.specializationRepository.remove(specialization);
    }
};
SpecializationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(specialization_entity_1.Specialization)),
    __param(1, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SpecializationService);
exports.SpecializationService = SpecializationService;
//# sourceMappingURL=specialization.service.js.map