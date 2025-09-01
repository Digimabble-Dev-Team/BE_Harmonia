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
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./core/constants");
const handle_response_1 = __importDefault(require("./core/utils/handle_response"));
class BaseController {
    constructor(service) {
        this.service = service;
    }
    async create(createDto) {
        try {
            let data = await this.service.create(createDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj(null, constants_1.EM100, error);
        }
    }
    async findAll() {
        try {
            let data = await this.service.findAll();
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj(null, constants_1.EM100, error);
        }
    }
    async findOne(id) {
        try {
            let data = await this.service.findOne(id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj(null, constants_1.EM100, error);
        }
    }
    async update(id, updateDto) {
        try {
            let data = await this.service.update(id, updateDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj(null, constants_1.EM100, error);
        }
    }
    async remove(id) {
        try {
            let data = await this.service.destroy(id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM127, data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj(null, constants_1.EM100, error);
        }
    }
}
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "remove", null);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map