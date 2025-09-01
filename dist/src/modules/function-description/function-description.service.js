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
exports.FunctionDescriptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const function_description_entity_1 = require("./entities/function-description.entity");
const therapist_entity_1 = require("../therapist/entities/therapist.entity");
const constants_1 = require("../../core/constants");
let FunctionDescriptionService = class FunctionDescriptionService {
    constructor(functionDescriptionRepository, therapistRepository) {
        this.functionDescriptionRepository = functionDescriptionRepository;
        this.therapistRepository = therapistRepository;
    }
    async create(createDto) {
        try {
            const { consultation_id, therapist_ids } = createDto, rest = __rest(createDto, ["consultation_id", "therapist_ids"]);
            const functionDescription = this.functionDescriptionRepository.create(Object.assign(Object.assign({}, rest), { consultation: {
                    consultation_id: consultation_id,
                } }));
            if (therapist_ids && therapist_ids.length > 0) {
                const therapists = await this.therapistRepository.findBy({
                    _key: (0, typeorm_2.In)(therapist_ids),
                });
                functionDescription.therapists = therapists;
            }
            return await this.functionDescriptionRepository.save(functionDescription);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(constants_1.EM100);
        }
    }
    async findAll(page, limit, search, consultationId) {
        const skip = (page - 1) * limit;
        const where = consultationId
            ? { consultation: { consultation_id: consultationId } }
            : {};
        if (search) {
            where.fonction = (0, typeorm_2.ILike)(`%${search}%`);
        }
        const [data, total] = await this.functionDescriptionRepository.findAndCount({
            where,
            skip,
            take: limit,
            relations: ['therapists'],
        });
        return { data, total };
    }
    async findOne(function_id) {
        const service = await this.functionDescriptionRepository.findOne({
            where: { function_id },
            relations: ['therapists'],
        });
        if (!service) {
            throw new common_1.NotFoundException(constants_1.EM119);
        }
        return service;
    }
    async update(function_id, updateDto) {
        const service = await this.findOne(function_id);
        const { therapist_ids } = updateDto, rest = __rest(updateDto, ["therapist_ids"]);
        if (therapist_ids) {
            const therapists = await this.therapistRepository.findBy({
                _key: (0, typeorm_2.In)(therapist_ids),
            });
            service.therapists = therapists;
        }
        this.functionDescriptionRepository.merge(service, rest);
        return this.functionDescriptionRepository.save(service);
    }
    async remove(function_id) {
        const service = await this.findOne(function_id);
        await this.functionDescriptionRepository.remove(service);
    }
};
FunctionDescriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(function_description_entity_1.FunctionDescription)),
    __param(1, (0, typeorm_1.InjectRepository)(therapist_entity_1.Therapist)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FunctionDescriptionService);
exports.FunctionDescriptionService = FunctionDescriptionService;
//# sourceMappingURL=function-description.service.js.map