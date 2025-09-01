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
exports.FunctionDescriptionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const function_description_service_1 = require("./function-description.service");
const create_function_description_dto_1 = require("./dto/create-function-description.dto");
const update_function_description_dto_1 = require("./dto/update-function-description.dto");
let FunctionDescriptionController = class FunctionDescriptionController {
    constructor(functionDescriptionService) {
        this.functionDescriptionService = functionDescriptionService;
    }
    create(createDto) {
        return this.functionDescriptionService.create(createDto);
    }
    findAll(page = 1, limit = 10, search, consultationId) {
        return this.functionDescriptionService.findAll(page, limit, search, consultationId);
    }
    findOne(id) {
        return this.functionDescriptionService.findOne(id);
    }
    update(id, updateDto) {
        return this.functionDescriptionService.update(id, updateDto);
    }
    remove(id) {
        return this.functionDescriptionService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new service (function description)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_function_description_dto_1.CreateFunctionDescriptionDto]),
    __metadata("design:returntype", void 0)
], FunctionDescriptionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Retrieve all services, optionally filtered by consultation',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'consultationId',
        required: false,
        type: String,
        description: 'Filter services by consultation ID',
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String, description: 'Search term' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('consultationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", void 0)
], FunctionDescriptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single service by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FunctionDescriptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a service' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_function_description_dto_1.UpdateFunctionDescriptionDto]),
    __metadata("design:returntype", void 0)
], FunctionDescriptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a service' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FunctionDescriptionController.prototype, "remove", null);
FunctionDescriptionController = __decorate([
    (0, swagger_1.ApiTags)('Function Descriptions (Services)'),
    (0, common_1.Controller)('function-descriptions'),
    __metadata("design:paramtypes", [function_description_service_1.FunctionDescriptionService])
], FunctionDescriptionController);
exports.FunctionDescriptionController = FunctionDescriptionController;
//# sourceMappingURL=function-description.controller.js.map