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
exports.LeadsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const leads_service_1 = require("./leads.service");
const create_lead_dto_1 = require("./dto/create-lead.dto");
const update_lead_dto_1 = require("./dto/update-lead.dto");
const lead_query_dto_1 = require("./dto/lead-query.dto");
const handle_response_1 = __importDefault(require("../../core/utils/handle_response"));
const constants_1 = require("../../core/constants");
let LeadsController = class LeadsController {
    constructor(leadsService) {
        this.leadsService = leadsService;
    }
    async create(createLeadDto) {
        try {
            const data = await this.leadsService.createLead(createLeadDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC201, constants_1.EM104, data);
        }
        catch (error) {
            const status = error instanceof common_1.HttpException ? error.getStatus() : constants_1.EC500;
            const message = error instanceof common_1.HttpException ? error.message : constants_1.EM100;
            return handle_response_1.default.buildErrObj(status, message, error);
        }
    }
    async findAll(queryDto) {
        try {
            const { pagNo = 1, limit = 10, status, searchText } = queryDto;
            const { data, total } = await this.leadsService.findLeadsWithPagination(pagNo, limit, searchText, status);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, {
                data, total, page: pagNo, limit,
                filters: { status, searchText }
            });
        }
        catch (error) {
            const status = error instanceof common_1.HttpException ? error.getStatus() : constants_1.EC500;
            const message = error instanceof common_1.HttpException ? error.message : constants_1.EM100;
            return handle_response_1.default.buildErrObj(status, message, error);
        }
    }
    async findOne(id) {
        try {
            const data = await this.leadsService.findOne(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            const status = error instanceof common_1.HttpException ? error.getStatus() : constants_1.EC500;
            const message = error instanceof common_1.HttpException ? error.message : constants_1.EM100;
            return handle_response_1.default.buildErrObj(status, message, error);
        }
    }
    async update(id, updateLeadDto) {
        try {
            await this.leadsService.update(+id, updateLeadDto);
            const data = await this.leadsService.findOne(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM116, data);
        }
        catch (error) {
            const status = error instanceof common_1.HttpException ? error.getStatus() : constants_1.EC500;
            const message = error instanceof common_1.HttpException ? error.message : constants_1.EM100;
            return handle_response_1.default.buildErrObj(status, message, error);
        }
    }
    async remove(id) {
        try {
            await this.leadsService.remove(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC204, constants_1.EM127, null);
        }
        catch (error) {
            const status = error instanceof common_1.HttpException ? error.getStatus() : constants_1.EC500;
            const message = error instanceof common_1.HttpException ? error.message : constants_1.EM100;
            return handle_response_1.default.buildErrObj(status, message, error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lead_dto_1.CreateLeadDto]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lead_query_dto_1.LeadQueryDto]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lead_dto_1.UpdateLeadDto]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "remove", null);
LeadsController = __decorate([
    (0, swagger_1.ApiTags)('Leads'),
    (0, common_1.Controller)('leads'),
    __metadata("design:paramtypes", [leads_service_1.LeadsService])
], LeadsController);
exports.LeadsController = LeadsController;
//# sourceMappingURL=leads.controller.js.map