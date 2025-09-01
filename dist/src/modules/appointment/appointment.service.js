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
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../../base.service");
const patient_entity_1 = require("../customers/entities/patient.entity");
const logger_1 = require("../../core/utils/logger");
const constants_1 = require("../../core/constants");
const appointment_entity_1 = __importDefault(require("./entities/appointment.entity"));
const therapist_entity_1 = require("../therapist/entities/therapist.entity");
const team_member_entity_1 = require("../team-member/entities/team-member.entity");
const branch_entity_1 = require("../branches/entities/branch.entity");
let AppointmentsService = class AppointmentsService extends base_service_1.BaseService {
    constructor(appointmentRepository, patientRepository, therapistRepository, teamMemberRepository, branchRepository) {
        super(appointmentRepository.manager);
        this.appointmentRepository = appointmentRepository;
        this.patientRepository = patientRepository;
        this.therapistRepository = therapistRepository;
        this.teamMemberRepository = teamMemberRepository;
        this.branchRepository = branchRepository;
        this.repository = appointmentRepository;
    }
    getBaseQuery() {
        return this.repository.createQueryBuilder('a')
            .leftJoinAndSelect('a.patient', 'patient')
            .leftJoinAndSelect('a.therapist', 'therapist')
            .leftJoinAndSelect('a.createdBy', 'creator')
            .leftJoinAndSelect('a.modifiedBy', 'modifier');
    }
    handleError(operation, error) {
        logger_1.logger.error(`Appointment_${operation}_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
        if (error instanceof common_1.HttpException)
            throw error;
        throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
    }
    async validateRelations(branchId, patientId, therapistKey, teamMemberId) {
        const [branch, patient, therapist, teamMember] = await Promise.all([
            this.branchRepository.findOne({ where: { branch_id: branchId } }),
            this.patientRepository.findOne({ where: { id: patientId } }),
            this.therapistRepository.findOne({ where: { therapistId: therapistKey } }),
            this.teamMemberRepository.findOne({ where: { team_id: teamMemberId } })
        ]);
        if (!branch)
            throw new common_1.BadRequestException(`Branch with ID ${branchId} not found`);
        if (!patient)
            throw new common_1.BadRequestException(`Patient with ID ${patientId} not found`);
        if (!therapist)
            throw new common_1.BadRequestException(`Therapist with key ${therapistKey} not found`);
        if (!teamMember)
            throw new common_1.BadRequestException(`Team member with ID ${teamMemberId} not found`);
        return { branch, patient, therapist, teamMember };
    }
    async createAppointment(createAppointmentDto) {
        try {
            logger_1.logger.info(`Appointment_Create_Entry: ${JSON.stringify(createAppointmentDto)}`);
            const { branch, patient, therapist, teamMember: createdBy } = await this.validateRelations(createAppointmentDto.branchId, createAppointmentDto.patientId, createAppointmentDto.therapistKey, createAppointmentDto.createdById);
            const appointment = this.repository.create(Object.assign(Object.assign({}, createAppointmentDto), { branch,
                patient,
                therapist,
                createdBy }));
            const savedAppointment = await this.repository.save(appointment);
            logger_1.logger.info(`Appointment_Create_Exit: ${JSON.stringify(savedAppointment)}`);
            return savedAppointment;
        }
        catch (error) {
            this.handleError('Create', error);
        }
    }
    async findAllWithPaginationAppointments(page, limit, search) {
        try {
            logger_1.logger.info(`Appointment_FindAllPaginated_Entry: page=${page}, limit=${limit}, search=${search}`);
            const query = this.getBaseQuery();
            if (search === null || search === void 0 ? void 0 : search.trim()) {
                const searchTerm = `%${search.trim()}%`;
                query.andWhere(new typeorm_2.Brackets(qb => {
                    qb.where('patient.firstname ILIKE :search')
                        .orWhere('patient.lastname ILIKE :search')
                        .orWhere('patient.emails ILIKE :search')
                        .orWhere('therapist.firstName ILIKE :search')
                        .orWhere('therapist.lastName ILIKE :search')
                        .orWhere('creator.first_name ILIKE :search')
                        .orWhere('creator.last_name ILIKE :search')
                        .orWhere('a.department::text ILIKE :search');
                }));
                query.setParameter('search', searchTerm);
            }
            const [data, total] = await query
                .orderBy('a.createdAt', 'DESC')
                .skip((page - 1) * limit)
                .take(limit)
                .getManyAndCount();
            logger_1.logger.info(`Appointment_FindAllPaginated_Exit: Found ${data.length} appointments, total: ${total}`);
            return { data, total };
        }
        catch (error) {
            this.handleError('FindAllPaginated', error);
        }
    }
    async findOneAppointment(id) {
        try {
            logger_1.logger.info(`Appointment_FindOne_Entry: id=${id}`);
            const appointment = await this.getBaseQuery()
                .andWhere('a.id = :id', { id })
                .getOne();
            if (!appointment) {
                throw new common_1.NotFoundException(constants_1.EM119);
            }
            logger_1.logger.info(`Appointment_FindOne_Exit: ${JSON.stringify(appointment)}`);
            return appointment;
        }
        catch (error) {
            this.handleError('FindOne', error);
        }
    }
    async updateAppointment(id, updateAppointmentDto) {
        try {
            logger_1.logger.info(`Appointment_Update_Entry: id=${id}, data=${JSON.stringify(updateAppointmentDto)}`);
            const existingAppointment = await this.findOneAppointment(id);
            const { modifiedById, branchId, patientId, therapistKey } = updateAppointmentDto, restDto = __rest(updateAppointmentDto, ["modifiedById", "branchId", "patientId", "therapistKey"]);
            const modifiedBy = await this.teamMemberRepository.findOne({ where: { team_id: modifiedById } });
            if (!modifiedBy) {
                throw new common_1.BadRequestException(`Team member with ID ${modifiedById} not found`);
            }
            const updateData = Object.assign(Object.assign({}, restDto), { modifiedBy });
            if (branchId && branchId !== existingAppointment.branch.branch_id) {
                const branch = await this.branchRepository.findOne({ where: { branch_id: branchId } });
                if (!branch)
                    throw new common_1.BadRequestException(`Branch with ID ${branchId} not found`);
                updateData.branch = branch;
            }
            if (patientId && patientId !== existingAppointment.patient.id) {
                const patient = await this.patientRepository.findOne({ where: { id: patientId } });
                if (!patient)
                    throw new common_1.BadRequestException(`Patient with ID ${patientId} not found`);
                updateData.patient = patient;
            }
            if (therapistKey && therapistKey !== existingAppointment.therapist.therapistId) {
                const therapist = await this.therapistRepository.findOne({ where: { therapistId: therapistKey } });
                if (!therapist)
                    throw new common_1.BadRequestException(`Therapist with key ${therapistKey} not found`);
                updateData.therapist = therapist;
            }
            const result = await this.repository.update(id, updateData);
            logger_1.logger.info(`Appointment_Update_Exit: ${JSON.stringify(result)}`);
            return result;
        }
        catch (error) {
            this.handleError('Update', error);
        }
    }
    async removeAppointment(id) {
        try {
            logger_1.logger.info(`Appointment_Remove_Entry: id=${id}`);
            await this.findOneAppointment(id);
            const result = await this.repository.delete(id);
            logger_1.logger.info(`Appointment_Remove_Exit: ${JSON.stringify(result)}`);
            return result;
        }
        catch (error) {
            this.handleError('Remove', error);
        }
    }
};
AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.default)),
    __param(1, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(2, (0, typeorm_1.InjectRepository)(therapist_entity_1.Therapist)),
    __param(3, (0, typeorm_1.InjectRepository)(team_member_entity_1.TeamMember)),
    __param(4, (0, typeorm_1.InjectRepository)(branch_entity_1.Branch)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AppointmentsService);
exports.AppointmentsService = AppointmentsService;
//# sourceMappingURL=appointment.service.js.map