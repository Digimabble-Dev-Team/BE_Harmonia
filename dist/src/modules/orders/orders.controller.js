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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const orders_service_1 = require("./orders.service");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const handle_response_1 = __importDefault(require("../../core/utils/handle_response"));
const constants_1 = require("../../core/constants");
const find_all_orders_query_dto_1 = require("./dto/find-all-orders-query.dto");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async create(createOrderDto) {
        try {
            const data = await this.ordersService.createOrder(createOrderDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC201, constants_1.EM104, data);
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
            const { data, total } = await this.ordersService.findAllWithPaginationOrders(page, limit, search);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, {
                data,
                total,
                page,
                limit,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const data = await this.ordersService.findOneOrder(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    async update(id, updateOrderDto) {
        try {
            await this.ordersService.updateOrder(+id, updateOrderDto);
            const data = await this.ordersService.findOneOrder(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM116, data);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    async remove(id) {
        try {
            await this.ordersService.removeOrder(+id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC204, constants_1.EM127, null);
        }
        catch (error) {
            return this.handleError(error);
        }
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
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_all_orders_query_dto_1.FindAllOrdersQueryDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "remove", null);
OrdersController = __decorate([
    (0, swagger_1.ApiTags)('Orders'),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map