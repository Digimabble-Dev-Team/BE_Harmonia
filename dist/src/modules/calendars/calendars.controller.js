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
exports.CalendarsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const handle_response_1 = __importDefault(require("../../core/utils/handle_response"));
const constants_1 = require("../../core/constants");
const calendars_service_1 = require("./calendars.service");
const find_all_calendars_query_dto_1 = require("./dto/find-all-calendars-query.dto");
let CalendarsController = class CalendarsController {
    constructor(calendarsService) {
        this.calendarsService = calendarsService;
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
    async findAll(query) {
        var _a, _b;
        const page = (_a = query.pagNo) !== null && _a !== void 0 ? _a : 1;
        const limit = (_b = query.limit) !== null && _b !== void 0 ? _b : 10;
        const search = query.search;
        try {
            const { data, total } = await this.calendarsService.findAllWithPagination(page, limit, search);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, 'Calendars retrieved successfully.', {
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
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_all_calendars_query_dto_1.FindAllCalendarsQueryDto]),
    __metadata("design:returntype", Promise)
], CalendarsController.prototype, "findAll", null);
CalendarsController = __decorate([
    (0, swagger_1.ApiTags)('Calendars'),
    (0, common_1.Controller)('calendars'),
    __metadata("design:paramtypes", [calendars_service_1.CalendarsService])
], CalendarsController);
exports.CalendarsController = CalendarsController;
//# sourceMappingURL=calendars.controller.js.map