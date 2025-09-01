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
exports.TherapistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const therapists_service_1 = require("./therapists.service");
const create_therapist_dto_1 = require("./dto/create-therapist.dto");
const update_therapist_dto_1 = require("./dto/update-therapist.dto");
const therapist_filter_dto_1 = require("./dto/therapist-filter.dto");
const therapist_entity_1 = require("./entities/therapist.entity");
let TherapistController = class TherapistController {
    constructor(therapistService) {
        this.therapistService = therapistService;
    }
    async create(dto) {
        return this.therapistService.create(dto);
    }
    async findAll(filter) {
        return this.therapistService.findAll(filter);
    }
    async search(q) {
        if (!q)
            return [];
        return this.therapistService.search(q);
    }
    async findOne(id) {
        return this.therapistService.findOne(id);
    }
    async update(id, dto) {
        return this.therapistService.update(id, dto);
    }
    async remove(id) {
        return this.therapistService.remove(id);
    }
    async restore(id) {
        return this.therapistService.restore(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new therapist' }),
    (0, swagger_1.ApiBody)({ type: create_therapist_dto_1.CreateTherapistDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Therapist created successfully', type: therapist_entity_1.Therapist }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_therapist_dto_1.CreateTherapistDto]),
    __metadata("design:returntype", Promise)
], TherapistController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all therapists with optional filters' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, example: '1' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, example: '10' }),
    (0, swagger_1.ApiQuery)({ name: 'searchText', required: false, example: 'John' }),
    (0, swagger_1.ApiQuery)({ name: 'branch', required: false, example: 'Main Clinic' }),
    (0, swagger_1.ApiQuery)({ name: 'departmentId', required: false, example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'specializationIds', required: false, isArray: true, type: Number, example: [2, 3] }),
    (0, swagger_1.ApiQuery)({ name: 'languageNames', required: false, isArray: true, type: String, example: ['English', 'French'] }),
    (0, swagger_1.ApiQuery)({ name: 'fromDate', required: false, example: '2025-07-01' }),
    (0, swagger_1.ApiQuery)({ name: 'toDate', required: false, example: '2025-07-31' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of therapists', type: [therapist_entity_1.Therapist] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [therapist_filter_dto_1.TherapistFilterDto]),
    __metadata("design:returntype", Promise)
], TherapistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search therapists by name, specialization, language, etc.' }),
    (0, swagger_1.ApiQuery)({
        name: 'q',
        required: true,
        description: 'Search keyword (name, specialization, language, etc.)',
        example: 'psychologist',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of therapists matching search criteria', type: [therapist_entity_1.Therapist] }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TherapistController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a therapist by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Therapist ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Therapist found', type: therapist_entity_1.Therapist }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Therapist not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TherapistController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a therapist by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_therapist_dto_1.UpdateTherapistDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Therapist updated successfully', type: therapist_entity_1.Therapist }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Therapist not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_therapist_dto_1.UpdateTherapistDto]),
    __metadata("design:returntype", Promise)
], TherapistController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete a therapist by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Therapist deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Therapist not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TherapistController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, swagger_1.ApiOperation)({ summary: 'Restore a soft-deleted therapist' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Therapist restored successfully', type: therapist_entity_1.Therapist }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Therapist not found or not deleted' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TherapistController.prototype, "restore", null);
TherapistController = __decorate([
    (0, swagger_1.ApiTags)('Therapists'),
    (0, common_1.Controller)('therapists'),
    __metadata("design:paramtypes", [therapists_service_1.TherapistService])
], TherapistController);
exports.TherapistController = TherapistController;
//# sourceMappingURL=therapists.controller.js.map