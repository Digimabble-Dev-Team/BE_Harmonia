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
exports.BranchesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const branches_service_1 = require("./branches.service");
const create_branch_dto_1 = require("./dto/create-branch.dto");
const update_branch_dto_1 = require("./dto/update-branch.dto");
const branch_entity_1 = require("./entities/branch.entity");
let BranchesController = class BranchesController {
    constructor(branchesService) {
        this.branchesService = branchesService;
    }
    create(createBranchDto) {
        return this.branchesService.create(createBranchDto);
    }
    findAll(page, limit, search) {
        return this.branchesService.findAll(page, limit, search);
    }
    findOne(id) {
        return this.branchesService.findOne(id);
    }
    update(id, updateBranchDto) {
        return this.branchesService.update(id, updateBranchDto);
    }
    async remove(id) {
        await this.branchesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new branch' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The branch has been successfully created.',
        type: branch_entity_1.Branch,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Branch with this email already exists.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_branch_dto_1.CreateBranchDto]),
    __metadata("design:returntype", void 0)
], BranchesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all branches with pagination and search' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A list of all branches.',
        type: [branch_entity_1.Branch],
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Page number', type: Number, example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Items per page', type: Number, example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search by name, email, or phone', type: String, example: 'John Doe' }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], BranchesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single branch by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Branch details.', type: branch_entity_1.Branch }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Branch not found.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BranchesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a branch' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The branch has been successfully updated.',
        type: branch_entity_1.Branch,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Branch not found.' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Branch with this email already exists.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_branch_dto_1.UpdateBranchDto]),
    __metadata("design:returntype", void 0)
], BranchesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a branch' }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'The branch has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Branch not found.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "remove", null);
BranchesController = __decorate([
    (0, swagger_1.ApiTags)('Branches'),
    (0, common_1.Controller)('branches'),
    __metadata("design:paramtypes", [branches_service_1.BranchesService])
], BranchesController);
exports.BranchesController = BranchesController;
//# sourceMappingURL=branches.controller.js.map