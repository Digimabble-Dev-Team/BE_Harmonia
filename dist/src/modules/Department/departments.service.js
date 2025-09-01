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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const department_entity_1 = require("./entities/department.entity");
let DepartmentsService = class DepartmentsService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async create(dto) {
        var _a;
        const department = this.departmentRepository.create(Object.assign(Object.assign({}, dto), { is_active: (_a = dto.is_active) !== null && _a !== void 0 ? _a : true }));
        return await this.departmentRepository.save(department);
    }
    async findAllFiltered(branchId, search) {
        const query = this.departmentRepository
            .createQueryBuilder('department')
            .leftJoin('department.therapists', 't')
            .leftJoin('t.branches', 'b');
        if (branchId) {
            query.andWhere('b.branch_id = :branchId', { branchId });
        }
        if (search) {
            query.andWhere('(department.name ILIKE :search OR department.description ILIKE :search)', { search: `%${search}%` });
        }
        query.distinct(true);
        return query.getMany();
    }
    async findAll() {
        return await this.departmentRepository.find();
    }
    async findOne(id) {
        const department = await this.departmentRepository.findOne({ where: { id } });
        if (!department) {
            throw new common_1.NotFoundException(`Department with ID ${id} not found`);
        }
        return department;
    }
    async update(id, dto) {
        const department = await this.findOne(id);
        await this.departmentRepository.update(id, dto);
        return await this.findOne(id);
    }
    async remove(id) {
        const department = await this.findOne(id);
        await this.departmentRepository.remove(department);
    }
};
DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map