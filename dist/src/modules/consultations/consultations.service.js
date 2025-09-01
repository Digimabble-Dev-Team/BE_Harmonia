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
exports.ConsultationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const consultation_entity_1 = require("./entities/consultation.entity");
const constants_1 = require("../../core/constants");
let ConsultationsService = class ConsultationsService {
    constructor(consultationRepository) {
        this.consultationRepository = consultationRepository;
    }
    async create(createConsultationDto) {
        try {
            const { branch_id } = createConsultationDto, restOfDto = __rest(createConsultationDto, ["branch_id"]);
            const consultation = this.consultationRepository.create(Object.assign(Object.assign({}, restOfDto), { branch: {
                    branch_id: branch_id,
                } }));
            return await this.consultationRepository.save(consultation);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(constants_1.EM100);
        }
    }
    async findAll(page, limit, search, branchId) {
        const skip = (page - 1) * limit;
        const where = branchId ? { branch: { branch_id: branchId } } : {};
        if (search) {
            where.our_consultations = (0, typeorm_2.ILike)(`%${search}%`);
        }
        const [data, total] = await this.consultationRepository.findAndCount({
            where,
            skip,
            take: limit,
        });
        return { data, total };
    }
    async findOne(consultation_id) {
        const consultation = await this.consultationRepository.findOne({
            where: { consultation_id },
            relations: ['function_descriptions'],
        });
        if (!consultation) {
            throw new common_1.NotFoundException(constants_1.EM119);
        }
        return consultation;
    }
    async update(consultation_id, updateConsultationDto) {
        const consultation = await this.findOne(consultation_id);
        this.consultationRepository.merge(consultation, updateConsultationDto);
        return this.consultationRepository.save(consultation);
    }
    async remove(consultation_id) {
        const consultation = await this.findOne(consultation_id);
        await this.consultationRepository.remove(consultation);
    }
};
ConsultationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consultation_entity_1.Consultation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsultationsService);
exports.ConsultationsService = ConsultationsService;
//# sourceMappingURL=consultations.service.js.map