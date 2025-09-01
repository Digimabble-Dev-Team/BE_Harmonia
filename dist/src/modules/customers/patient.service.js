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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const patient_entity_1 = require("./entities/patient.entity");
const base_service_1 = require("../../base.service");
const logger_1 = require("../../core/utils/logger");
const constants_1 = require("../../core/constants");
const error_enums_1 = require("../../core/constants/error_enums");
let PatientsService = class PatientsService extends base_service_1.BaseService {
    constructor(patientRepository) {
        super(patientRepository.manager);
        this.patientRepository = patientRepository;
        this.repository = patientRepository;
    }
    async create(createPatientDto) {
        var _a;
        try {
            logger_1.logger.info(`Patient_Create_Entry: ${JSON.stringify(createPatientDto)}`);
            const patient = this.patientRepository.create(Object.assign(Object.assign({}, createPatientDto), { status: (_a = createPatientDto.status) !== null && _a !== void 0 ? _a : 'ACTIVE', is_delete: false }));
            const savedPatient = await this.patientRepository.save(patient);
            const result = await this.patientRepository.findOne({
                where: { id: savedPatient.id, is_delete: false },
            });
            logger_1.logger.info(`Patient_Create_Exit: ${JSON.stringify(result)}`);
            return result;
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            logger_1.logger.error(`Patient_Create_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findAll(options) {
        try {
            logger_1.logger.info('Patient_FindAll_Entry');
            const patients = await this.patientRepository.find(Object.assign({ where: { is_delete: false } }, (options || {})));
            logger_1.logger.info(`Patient_FindAll_Exit: Found ${patients.length} patients`);
            return patients;
        }
        catch (error) {
            logger_1.logger.error(`Patient_FindAll_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findAllWithPagination(page, limit, options) {
        try {
            const query = this.patientRepository.createQueryBuilder('patient');
            query.where('patient.is_delete = false');
            if (options === null || options === void 0 ? void 0 : options.searchText) {
                const search = `%${options.searchText}%`;
                query.andWhere(`(patient.firstname ILIKE :search 
      OR patient.lastname ILIKE :search 
      OR patient.emails ILIKE :search 
      OR EXISTS (
        SELECT 1
        FROM unnest(patient.phones) AS phone
        WHERE phone ILIKE :search
      ))`, { search });
            }
            if (options === null || options === void 0 ? void 0 : options.branch) {
                query.andWhere('patient.source = :branch', { branch: options.branch });
            }
            if ((options === null || options === void 0 ? void 0 : options.fromDate) && (options === null || options === void 0 ? void 0 : options.toDate)) {
                query.andWhere('DATE(patient.created_at) BETWEEN :fromDate AND :toDate', {
                    fromDate: options.fromDate,
                    toDate: options.toDate,
                });
            }
            const [data, total] = await query
                .orderBy('patient.created_at', 'DESC')
                .skip((page - 1) * limit)
                .take(limit)
                .getManyAndCount();
            return { data, total };
        }
        catch (error) {
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findOne(id) {
        try {
            logger_1.logger.info(`Patient_FindOne_Entry: id=${id}`);
            const patient = await this.patientRepository.findOne({
                where: { id, is_delete: false },
            });
            if (!patient) {
                logger_1.logger.error(`Patient_FindOne_Error: No record found for ID ${id}`);
                throw new common_1.NotFoundException(error_enums_1.Errors.NO_RECORD_FOUND);
            }
            logger_1.logger.info(`Patient_FindOne_Exit: ${JSON.stringify(patient)}`);
            return patient;
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            logger_1.logger.error(`Patient_FindOne_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findOneByIdentifier(identifier) {
        try {
            let patient = null;
            if (identifier.id) {
                patient = await this.patientRepository.findOne({
                    where: { id: identifier.id, is_delete: false },
                });
            }
            else if (identifier.email) {
                patient = await this.patientRepository.findOne({
                    where: { emails: identifier.email, is_delete: false },
                });
            }
            else if (identifier.phone) {
                patient = await this.patientRepository
                    .createQueryBuilder('patient')
                    .where('patient.is_delete = false')
                    .andWhere(':phone = ANY(patient.phones)', { phone: identifier.phone })
                    .getOne();
            }
            if (!patient) {
                throw new common_1.HttpException('Patient not found', common_1.HttpStatus.NOT_FOUND);
            }
            return patient;
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async updatePatient(id, updatePatientDto) {
        try {
            logger_1.logger.info(`Patient_Service_Update_Entry: id=${id}, data=${JSON.stringify(updatePatientDto)}`);
            const patient = await this.findOne(id);
            if (!patient) {
                throw new common_1.HttpException(`Patient with ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            await this.patientRepository.update(id, updatePatientDto);
            const updatedPatient = await this.findOne(id);
            logger_1.logger.info(`Patient_Service_Update_Exit: ${JSON.stringify(updatedPatient)}`);
            return updatedPatient;
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            logger_1.logger.error(`Patient_Service_Update_Error: ${(error === null || error === void 0 ? void 0 : error.message) || error}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async removePatient(id) {
        try {
            logger_1.logger.info(`Patient_Remove_Entry: id=${id}`);
            const patient = await this.findOne(id);
            if (!patient) {
                throw new common_1.HttpException(`Patient with ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            await this.patientRepository.update(id, {
                is_delete: true,
                deleted_at: new Date(),
            });
            logger_1.logger.info(`Patient_Remove_Exit: Patient ${id} soft deleted`);
        }
        catch (error) {
            if (error instanceof common_1.HttpException)
                throw error;
            logger_1.logger.error(`Patient_Remove_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
};
PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PatientsService);
exports.PatientsService = PatientsService;
//# sourceMappingURL=patient.service.js.map