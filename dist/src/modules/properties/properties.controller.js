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
exports.PropertiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const properties_service_1 = require("./properties.service");
const create_property_dto_1 = require("./dto/create-property.dto");
const update_property_dto_1 = require("./dto/update-property.dto");
const handle_response_1 = __importDefault(require("../../core/utils/handle_response"));
const constants_1 = require("../../core/constants");
const shared_dto_1 = require("../../core/interfaces/shared.dto");
let PropertiesController = class PropertiesController {
    constructor(propertiesService) {
        this.propertiesService = propertiesService;
    }
    async create(createPropertyDto) {
        try {
            const data = await this.propertiesService.createProperty(createPropertyDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC201, constants_1.EM104, data);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async findAll(paginationDto) {
        try {
            if (paginationDto.pagNo && paginationDto.limit) {
                const { data, total } = await this.propertiesService.findAllWithPagination(paginationDto.pagNo, paginationDto.limit);
                return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, { data, total });
            }
            else {
                const data = await this.propertiesService.findAllProperties();
                return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
            }
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async findOne(id) {
        try {
            const data = await this.propertiesService.findOneProperty(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            if (error.message.includes('not found')) {
                return handle_response_1.default.buildErrObj(constants_1.EC404, constants_1.EM119, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async update(id, updatePropertyDto) {
        try {
            await this.propertiesService.updateProperty(+id, updatePropertyDto);
            const data = await this.propertiesService.findOneProperty(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM116, data);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            if (error.message.includes('not found')) {
                return handle_response_1.default.buildErrObj(constants_1.EC404, constants_1.EM119, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
    async remove(id) {
        try {
            await this.propertiesService.removeProperty(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC204, constants_1.EM127, null);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                return handle_response_1.default.buildErrObj(error.getStatus(), error.message, error);
            }
            if (error.message.includes('not found')) {
                return handle_response_1.default.buildErrObj(constants_1.EC404, constants_1.EM119, error);
            }
            return handle_response_1.default.buildErrObj(constants_1.EC500, constants_1.EM100, error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_property_dto_1.UpdatePropertyDto]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertiesController.prototype, "remove", null);
PropertiesController = __decorate([
    (0, swagger_1.ApiTags)('Properties'),
    (0, common_1.Controller)('properties'),
    __metadata("design:paramtypes", [properties_service_1.PropertiesService])
], PropertiesController);
exports.PropertiesController = PropertiesController;
//# sourceMappingURL=properties.controller.js.map