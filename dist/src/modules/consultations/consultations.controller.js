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
exports.ConsultationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const consultations_service_1 = require("./consultations.service");
const create_consultation_dto_1 = require("./dto/create-consultation.dto");
const update_function_description_dto_1 = require("./dto/update-function-description.dto");
let ConsultationsController = class ConsultationsController {
    constructor(consultationsService) {
        this.consultationsService = consultationsService;
    }
    create(createConsultationDto) {
        return this.consultationsService.create(createConsultationDto);
    }
    findAll(page = 1, limit = 10, search, branchId) {
        return this.consultationsService.findAll(page, limit, search, branchId);
    }
    findOne(id) {
        return this.consultationsService.findOne(id);
    }
    update(id, updateConsultationDto) {
        return this.consultationsService.update(id, updateConsultationDto);
    }
    remove(id) {
        return this.consultationsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new consultation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consultation_dto_1.CreateConsultationDto]),
    __metadata("design:returntype", void 0)
], ConsultationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Retrieve all consultations, optionally filtered by branch',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'branchId',
        required: false,
        type: String,
        description: 'Filter consultations by branch ID',
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page', example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String, description: 'Search term', example: 'John Doe' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('branchId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number]),
    __metadata("design:returntype", void 0)
], ConsultationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single consultation by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsultationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a consultation' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_function_description_dto_1.UpdateConsultationDto]),
    __metadata("design:returntype", void 0)
], ConsultationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a consultation' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsultationsController.prototype, "remove", null);
ConsultationsController = __decorate([
    (0, swagger_1.ApiTags)('Consultations'),
    (0, common_1.Controller)('consultations'),
    __metadata("design:paramtypes", [consultations_service_1.ConsultationsService])
], ConsultationsController);
exports.ConsultationsController = ConsultationsController;
//# sourceMappingURL=consultations.controller.js.map