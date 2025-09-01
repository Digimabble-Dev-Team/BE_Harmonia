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
exports.SpecializationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const specialization_service_1 = require("./specialization.service");
const create_specialization_dto_1 = require("./dto/create-specialization.dto");
const update_specialization_dto_1 = require("./dto/update-specialization.dto");
const find_all_specializations_query_dto_1 = require("./dto/find-all-specializations-query.dto");
let SpecializationController = class SpecializationController {
    constructor(specializationService) {
        this.specializationService = specializationService;
    }
    create(createDto) {
        return this.specializationService.create(createDto);
    }
    findAll(query) {
        const { page = 1, limit = 10, search } = query;
        return this.specializationService.findAll(page, limit, search);
    }
    findOne(id) {
        return this.specializationService.findOne(id);
    }
    update(id, updateDto) {
        return this.specializationService.update(id, updateDto);
    }
    remove(id) {
        return this.specializationService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new specialization' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialization_dto_1.CreateSpecializationDto]),
    __metadata("design:returntype", void 0)
], SpecializationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Retrieve all specializations',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_all_specializations_query_dto_1.FindAllSpecializationsQueryDto]),
    __metadata("design:returntype", void 0)
], SpecializationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single specialization by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SpecializationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a specialization' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_specialization_dto_1.UpdateSpecializationDto]),
    __metadata("design:returntype", void 0)
], SpecializationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a specialization' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SpecializationController.prototype, "remove", null);
SpecializationController = __decorate([
    (0, swagger_1.ApiTags)('Specializations'),
    (0, common_1.Controller)('specializations'),
    __metadata("design:paramtypes", [specialization_service_1.SpecializationService])
], SpecializationController);
exports.SpecializationController = SpecializationController;
//# sourceMappingURL=specialization.controller.js.map