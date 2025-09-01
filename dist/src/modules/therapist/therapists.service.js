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
exports.TherapistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const therapist_entity_1 = require("./entities/therapist.entity");
const language_entity_1 = require("../language/entities/language.entity");
const branch_entity_1 = require("../branches/entities/branch.entity");
const specialization_entity_1 = require("../specialization/entities/specialization.entity");
let TherapistService = class TherapistService {
    constructor(therapistRepository, languageRepository, branchRepository, specializationRepository) {
        this.therapistRepository = therapistRepository;
        this.languageRepository = languageRepository;
        this.branchRepository = branchRepository;
        this.specializationRepository = specializationRepository;
    }
    async create(dto) {
        var _a, _b;
        const languages = await Promise.all((dto.languages || []).map(async (name) => {
            let lang = await this.languageRepository.findOne({ where: { name } });
            if (!lang) {
                lang = this.languageRepository.create({ name });
                lang = await this.languageRepository.save(lang);
            }
            return lang;
        }));
        const branches = ((_a = dto.branches) === null || _a === void 0 ? void 0 : _a.length)
            ? await this.branchRepository.findBy({ branch_id: (0, typeorm_2.In)(dto.branches) })
            : [];
        const specializations = ((_b = dto.specializations) === null || _b === void 0 ? void 0 : _b.length)
            ? await this.specializationRepository.findBy({ specialization_id: (0, typeorm_2.In)(dto.specializations) })
            : [];
        const therapist = this.therapistRepository.create(Object.assign(Object.assign({}, dto), { languages,
            branches,
            specializations, isDelete: false, deletedAt: null }));
        return this.therapistRepository.save(therapist);
    }
    async findAll(filter) {
        var _a, _b, _c;
        const query = this.therapistRepository
            .createQueryBuilder('therapist')
            .leftJoinAndSelect('therapist.languages', 'language')
            .leftJoinAndSelect('therapist.branches', 'branch')
            .leftJoinAndSelect('therapist.specializations', 'specialization')
            .where('therapist.is_delete = false');
        if (filter === null || filter === void 0 ? void 0 : filter.searchText) {
            query.andWhere(`(therapist.first_name ILIKE :term 
        OR therapist.last_name ILIKE :term 
        OR therapist.full_name ILIKE :term 
        OR therapist.about_me ILIKE :term 
        OR language.name ILIKE :term 
        OR branch.name ILIKE :term 
        OR specialization.description ILIKE :term)`, { term: `%${filter.searchText}%` });
        }
        if (filter === null || filter === void 0 ? void 0 : filter.departmentId) {
            query.andWhere('therapist.department_id = :departmentId', {
                departmentId: filter.departmentId,
            });
        }
        if ((_a = filter === null || filter === void 0 ? void 0 : filter.specializationIds) === null || _a === void 0 ? void 0 : _a.length) {
            query.andWhere('specialization.specialization_id IN (:...specializationIds)', {
                specializationIds: filter.specializationIds,
            });
        }
        if ((_b = filter === null || filter === void 0 ? void 0 : filter.branchIds) === null || _b === void 0 ? void 0 : _b.length) {
            query.andWhere('branch.branch_id IN (:...branchIds)', {
                branchIds: filter.branchIds,
            });
        }
        if (filter === null || filter === void 0 ? void 0 : filter.branchName) {
            query.andWhere('branch.name ILIKE :branchName', {
                branchName: `%${filter.branchName}%`,
            });
        }
        if ((_c = filter === null || filter === void 0 ? void 0 : filter.languageIds) === null || _c === void 0 ? void 0 : _c.length) {
            query.andWhere('language.id IN (:...languageIds)', {
                languageIds: filter.languageIds,
            });
        }
        if ((filter === null || filter === void 0 ? void 0 : filter.page) && (filter === null || filter === void 0 ? void 0 : filter.limit)) {
            const page = Number(filter.page);
            const limit = Number(filter.limit);
            query.skip((page - 1) * limit).take(limit);
        }
        return query.getMany();
    }
    async search(term) {
        if (!term)
            return [];
        return this.therapistRepository
            .createQueryBuilder('therapist')
            .leftJoinAndSelect('therapist.languages', 'language')
            .leftJoinAndSelect('therapist.branches', 'branch')
            .leftJoinAndSelect('therapist.specializations', 'specialization')
            .where('therapist.is_delete = false')
            .andWhere(`(therapist.first_name ILIKE :term OR therapist.last_name ILIKE :term OR therapist.full_name ILIKE :term OR language.name ILIKE :term OR branch.name ILIKE :term OR specialization.description ILIKE :term)`, { term: `%${term}%` })
            .getMany();
    }
    async findOne(id) {
        const therapist = await this.therapistRepository.findOne({
            where: { therapistId: id, isDelete: false },
            relations: ['languages', 'branches', 'specializations'],
        });
        if (!therapist)
            throw new common_1.NotFoundException(`Therapist with ID ${id} not found`);
        return therapist;
    }
    async update(id, dto) {
        var _a, _b, _c;
        const therapist = await this.findOne(id);
        let languages = therapist.languages;
        if ((_a = dto.languages) === null || _a === void 0 ? void 0 : _a.length) {
            languages = await Promise.all(dto.languages.map(async (name) => {
                let lang = await this.languageRepository.findOne({ where: { name } });
                if (!lang) {
                    lang = this.languageRepository.create({ name });
                    lang = await this.languageRepository.save(lang);
                }
                return lang;
            }));
        }
        let branches = therapist.branches;
        if ((_b = dto.branches) === null || _b === void 0 ? void 0 : _b.length) {
            branches = await this.branchRepository.findBy({ branch_id: (0, typeorm_2.In)(dto.branches) });
        }
        let specializations = therapist.specializations;
        if ((_c = dto.specializations) === null || _c === void 0 ? void 0 : _c.length) {
            specializations = await this.specializationRepository.findBy({
                specialization_id: (0, typeorm_2.In)(dto.specializations),
            });
        }
        Object.assign(therapist, Object.assign(Object.assign({}, dto), { languages,
            branches,
            specializations }));
        return this.therapistRepository.save(therapist);
    }
    async remove(id) {
        const therapist = await this.findOne(id);
        therapist.isDelete = true;
        therapist.deletedAt = new Date();
        await this.therapistRepository.save(therapist);
        return { deleted: true };
    }
    async restore(id) {
        const therapist = await this.therapistRepository.findOne({
            where: { therapistId: id, isDelete: true },
        });
        if (!therapist)
            throw new common_1.NotFoundException(`Therapist with ID ${id} not found or not deleted`);
        therapist.isDelete = false;
        therapist.deletedAt = null;
        return this.therapistRepository.save(therapist);
    }
};
TherapistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(therapist_entity_1.Therapist)),
    __param(1, (0, typeorm_1.InjectRepository)(language_entity_1.Language)),
    __param(2, (0, typeorm_1.InjectRepository)(branch_entity_1.Branch)),
    __param(3, (0, typeorm_1.InjectRepository)(specialization_entity_1.Specialization)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TherapistService);
exports.TherapistService = TherapistService;
//# sourceMappingURL=therapists.service.js.map