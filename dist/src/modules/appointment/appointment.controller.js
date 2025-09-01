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
exports.AppointmentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const handle_response_1 = __importDefault(require("../../core/utils/handle_response"));
const constants_1 = require("../../core/constants");
const create_appointment_dto_1 = require("./dto/create-appointment.dto");
const update_appointment_dto_1 = require("./dto/update-appointment.dto");
const appointment_service_1 = require("./appointment.service");
const find_all_appointments_query_dto_1 = require("./dto/find-all-appointments-query.dto");
let AppointmentsController = class AppointmentsController {
    constructor(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    handleError(error) {
        var _a;
        if (error instanceof common_1.HttpException) {
            return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
        }
        if ((_a = error.message) === null || _a === void 0 ? void 0 : _a.includes('not found')) {
            return handle_response_1.default.buildErrObj(constants_1.EC404, constants_1.EM119, error);
        }
        return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
    }
    async create(createAppointmentDto) {
        try {
            const data = await this.appointmentsService.createAppointment(createAppointmentDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC201, 'Appointment created successfully.', data);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    async findAll(query) {
        var _a, _b;
        const page = (_a = query.pagNo) !== null && _a !== void 0 ? _a : 1;
        const limit = (_b = query.limit) !== null && _b !== void 0 ? _b : 10;
        const search = query.search;
        try {
            const { data, total } = await this.appointmentsService.findAllWithPaginationAppointments(page, limit, search);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, 'Appointments retrieved successfully.', {
                data,
                total,
                page,
                limit,
            });
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    async findOne(id) {
        try {
            const data = await this.appointmentsService.findOneAppointment(id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, 'Appointment retrieved successfully.', data);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    async update(id, updateAppointmentDto) {
        try {
            await this.appointmentsService.updateAppointment(id, updateAppointmentDto);
            const data = await this.appointmentsService.findOneAppointment(id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, 'Appointment updated successfully.', data);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    async remove(id) {
        try {
            await this.appointmentsService.removeAppointment(id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, 'Appointment deleted successfully.', null);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_all_appointments_query_dto_1.FindAllAppointmentsQueryDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "remove", null);
AppointmentsController = __decorate([
    (0, swagger_1.ApiTags)('Appointments'),
    (0, common_1.Controller)('appointments'),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentsService])
], AppointmentsController);
exports.AppointmentsController = AppointmentsController;
//# sourceMappingURL=appointment.controller.js.map