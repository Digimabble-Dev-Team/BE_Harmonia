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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const patient_service_1 = require("./patient.service");
const create_patient_dto_1 = require("./dto/create-patient.dto");
const update_patient_dto_1 = require("./dto/update-patient.dto");
const handle_response_1 = __importDefault(require("../../core/utils/handle_response"));
const constants_1 = require("../../core/constants");
const shared_dto_1 = require("../../core/interfaces/shared.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const logger_1 = require("../../core/utils/logger");
let PatientsController = class PatientsController {
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    async create(reqBody) {
        try {
            const createCustomerDto = (0, class_transformer_1.plainToClass)(create_patient_dto_1.CreatePatientDto, reqBody);
            await (0, class_validator_1.validateOrReject)(createCustomerDto);
            const data = await this.patientsService.create(createCustomerDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC201, constants_1.EM104, data);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            console.error('Create customer error:', error);
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async findAll(queryParams) {
        try {
            const paginationDto = (0, class_transformer_1.plainToClass)(shared_dto_1.PaginationDto, queryParams);
            await (0, class_validator_1.validateOrReject)(paginationDto);
            if (paginationDto.pagNo && paginationDto.limit) {
                const { data, total } = await this.patientsService.findAllWithPagination(paginationDto.pagNo, paginationDto.limit, {
                    searchText: paginationDto.searchText,
                    branch: paginationDto.branch,
                    fromDate: paginationDto.fromDate,
                    toDate: paginationDto.toDate,
                });
                return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, { data, total });
            }
            else {
                const data = await this.patientsService.findAll();
                return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
            }
        }
        catch (error) {
            console.error('FindAll error:', error);
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async findOne(id) {
        try {
            const data = await this.patientsService.findOne(id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            console.error('FindOne error:', error);
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async findPatient(value) {
        try {
            let patient;
            if (this.isUUID(value)) {
                patient = await this.patientsService.findOneByIdentifier({ id: value });
            }
            else if (value.includes('@')) {
                patient = await this.patientsService.findOneByIdentifier({ email: value });
            }
            else {
                patient = await this.patientsService.findOneByIdentifier({ phone: value });
            }
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, patient);
        }
        catch (error) {
            console.error('FindPatient error:', error);
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    isUUID(value) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
    }
    async update(id, reqBody) {
        try {
            logger_1.logger.info(`Patient_Update_Entry: id=${id}, rawBody=${JSON.stringify(reqBody)}`);
            const dto = (0, class_transformer_1.plainToClass)(update_patient_dto_1.UpdatePatientDto, reqBody);
            if (Object.keys(dto).length === 0) {
                throw new common_1.HttpException('No fields provided to update', common_1.HttpStatus.BAD_REQUEST);
            }
            await (0, class_validator_1.validateOrReject)(dto, { skipMissingProperties: true });
            const data = await this.patientsService.updatePatient(id, dto);
            logger_1.logger.info(`Patient_Update_Exit: ${JSON.stringify(data)}`);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM116, data);
        }
        catch (error) {
            logger_1.logger.error(`Patient_Update_Error: ${(error === null || error === void 0 ? void 0 : error.message) || error}`);
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async remove(id) {
        try {
            await this.patientsService.removePatient(id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC204, constants_1.EM127, null);
        }
        catch (error) {
            console.error('Delete error:', error);
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new customer (plain JSON only)' }),
    (0, swagger_1.ApiBody)({ type: create_patient_dto_1.CreatePatientDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Customer created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all customers with pagination and filters (plain query only)',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Customers fetched successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    (0, swagger_1.ApiQuery)({ name: 'pagNo', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'searchText', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'branch', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'fromDate', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'toDate', required: false, type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get patient by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, type: String, example: 'a973e85c-c9d3-4566-b1a5-43b2ab61b614' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Patient fetched successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid ID or request format' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('find/:value'),
    (0, swagger_1.ApiOperation)({ summary: 'Get patient by ID, email, or phone' }),
    (0, swagger_1.ApiParam)({
        name: 'value',
        description: 'Patient ID (UUID), email, or phone number',
        example: 'a973e85c-c9d3-4566-b1a5-43b2ab61b614',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Patient fetched successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid request parameters' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Patient not found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findPatient", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a patient by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        type: String,
        example: 'a973e85c-c9d3-4566-b1a5-43b2ab61b614',
    }),
    (0, swagger_1.ApiBody)({ type: update_patient_dto_1.UpdatePatientDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Patient updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error or no fields provided' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete a patient by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        type: String,
        example: 'a973e85c-c9d3-4566-b1a5-43b2ab61b614',
    }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Patient soft deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid ID or input' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "remove", null);
PatientsController = __decorate([
    (0, swagger_1.ApiTags)('Patients'),
    (0, common_1.Controller)('patients'),
    __metadata("design:paramtypes", [patient_service_1.PatientsService])
], PatientsController);
exports.PatientsController = PatientsController;
//# sourceMappingURL=patient.controller.js.map