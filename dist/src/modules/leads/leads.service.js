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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../../base.service");
const lead_entity_1 = require("./entities/lead.entity");
const patient_entity_1 = require("../customers/entities/patient.entity");
const property_entity_1 = __importDefault(require("../properties/entities/property.entity"));
const logger_1 = require("../../core/utils/logger");
const constants_1 = require("../../core/constants");
let LeadsService = class LeadsService extends base_service_1.BaseService {
    constructor(leadRepository, customerRepository, propertyRepository) {
        super(leadRepository.manager);
        this.leadRepository = leadRepository;
        this.customerRepository = customerRepository;
        this.propertyRepository = propertyRepository;
        this.relations = ['customer', 'customer.address', 'interested_property'];
        this.repository = leadRepository;
    }
    async createLead(dto) {
        try {
            logger_1.logger.info(`Lead_Create: ${JSON.stringify(dto)}`);
            const existingLead = await this.leadRepository.findOne({
                where: {
                    customer: { id: String(dto.customer_id) },
                    interested_property: { id: dto.interested_property_id },
                    is_deleted: false
                }
            });
            if (existingLead) {
                throw new common_1.HttpException('A lead with the same customer, property, and inquiry date already exists', 409);
            }
            const customer = await this.customerRepository.findOne({ where: { id: String(dto.customer_id) } });
            if (!customer) {
                throw new common_1.HttpException('Customer not found', 404);
            }
            const property = await this.propertyRepository.findOne({ where: { id: dto.interested_property_id } });
            if (!property) {
                throw new common_1.HttpException('Property not found', 404);
            }
            const { customer_id, interested_property_id } = dto, leadFields = __rest(dto, ["customer_id", "interested_property_id"]);
            const leadData = Object.assign(Object.assign({}, leadFields), { customer, interested_property: property });
            const lead = await this.leadRepository.save(this.leadRepository.create(leadData));
            logger_1.logger.info(`Lead_Created: ${lead.id}`);
            return lead;
        }
        catch (error) {
            logger_1.logger.error(`Lead_Create_Error: ${error === null || error === void 0 ? void 0 : error.message}`);
            throw error instanceof common_1.HttpException ? error : new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findLeadsWithPagination(page, limit, searchText, status) {
        try {
            const query = this.leadRepository
                .createQueryBuilder('lead')
                .leftJoinAndSelect('lead.customer', 'customer')
                .leftJoinAndSelect('customer.address', 'address')
                .leftJoinAndSelect('lead.interested_property', 'property')
                .where('lead.is_deleted = false')
                .orderBy('lead.created_at', 'DESC');
            if (searchText === null || searchText === void 0 ? void 0 : searchText.trim()) {
                query.andWhere(`(customer.fullName ILIKE :search OR customer.email ILIKE :search OR 
            customer.phoneNumber ILIKE :search OR property.name ILIKE :search OR 
            lead.notes ILIKE :search OR address.city ILIKE :search OR address.country ILIKE :search)`, { search: `%${searchText.trim()}%` });
            }
            if (status) {
                query.andWhere('lead.lead_status = :status', { status });
            }
            const [data, total] = await query
                .skip((page - 1) * limit)
                .take(limit)
                .getManyAndCount();
            return { data, total };
        }
        catch (error) {
            logger_1.logger.error(`Find_Pagination_Error: ${error === null || error === void 0 ? void 0 : error.message}`);
            throw error instanceof common_1.HttpException ? error : new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findOne(id) {
        try {
            const lead = await this.leadRepository.findOne({
                where: { id, is_deleted: false },
                relations: this.relations,
            });
            if (!lead) {
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            return lead;
        }
        catch (error) {
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async update(id, dto) {
        try {
            const existing = await this.findOne(id);
            if (!existing) {
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            const updateData = Object.assign({}, dto);
            if (dto.customer_id) {
                const customer = await this.customerRepository.findOne({ where: { id: String(dto.customer_id) } });
                if (!customer) {
                    throw new common_1.HttpException('Customer not found', 404);
                }
                updateData.customer = customer;
                delete updateData.customer_id;
            }
            if (dto.interested_property_id) {
                const property = await this.propertyRepository.findOne({ where: { id: dto.interested_property_id } });
                if (!property) {
                    throw new common_1.HttpException('Property not found', 404);
                }
                updateData.interested_property = property;
                delete updateData.interested_property_id;
            }
            return this.leadRepository.update(id, updateData);
        }
        catch (error) {
            throw error instanceof common_1.HttpException ? error : new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async remove(id) {
        try {
            const existing = await this.findOne(id);
            if (!existing) {
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            return super.remove(id);
        }
        catch (error) {
            throw error instanceof common_1.HttpException ? error : new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
};
LeadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lead_entity_1.Lead)),
    __param(1, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(2, (0, typeorm_1.InjectRepository)(property_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LeadsService);
exports.LeadsService = LeadsService;
//# sourceMappingURL=leads.service.js.map