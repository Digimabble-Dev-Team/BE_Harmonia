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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../../base.service");
const property_entity_1 = __importDefault(require("../properties/entities/property.entity"));
const patient_entity_1 = require("../customers/entities/patient.entity");
const logger_1 = require("../../core/utils/logger");
const constants_1 = require("../../core/constants");
const orders_entity_1 = __importDefault(require("./entities/orders.entity"));
let OrdersService = class OrdersService extends base_service_1.BaseService {
    constructor(orderRepository, propertyRepository, customerRepository) {
        super(orderRepository.manager);
        this.orderRepository = orderRepository;
        this.propertyRepository = propertyRepository;
        this.customerRepository = customerRepository;
        this.repository = orderRepository;
    }
    getBaseQuery() {
        return this.repository.createQueryBuilder('o')
            .leftJoinAndSelect('o.customer', 'customer')
            .leftJoinAndSelect('customer.address', 'customerAddress')
            .leftJoinAndSelect('o.property', 'property')
            .where('o.is_deleted = :isDeleted', { isDeleted: false });
    }
    handleError(operation, error) {
        logger_1.logger.error(`Order_${operation}_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
        if (error instanceof common_1.HttpException)
            throw error;
        throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
    }
    async validateRelations(customerId, propertyId) {
        const [customer, property] = await Promise.all([
            this.customerRepository.findOne({ where: { id: customerId.toString(), } }),
            this.propertyRepository.findOne({ where: { id: propertyId, is_deleted: false } })
        ]);
        if (!customer)
            throw new common_1.BadRequestException(`Customer with ID ${customerId} not found`);
        if (!property)
            throw new common_1.BadRequestException(`Property with ID ${propertyId} not found`);
        return { customer, property };
    }
    async createOrder(createOrderDto) {
        try {
            logger_1.logger.info(`Order_Create_Entry: ${JSON.stringify(createOrderDto)}`);
            const { customer, property } = await this.validateRelations(createOrderDto.customer_id, createOrderDto.property_id);
            const existingOrder = await this.repository.findOne({
                where: { order_id: createOrderDto.order_id, is_deleted: false }
            });
            if (existingOrder) {
                throw new common_1.ConflictException(`Order with ID ${createOrderDto.order_id} already exists`);
            }
            const order = this.repository.create(Object.assign(Object.assign({}, createOrderDto), { customer,
                property, amount_status: createOrderDto.amount_status || 'Pending' }));
            const savedOrder = await this.repository.save(order);
            logger_1.logger.info(`Order_Create_Exit: ${JSON.stringify(savedOrder)}`);
            return savedOrder;
        }
        catch (error) {
            this.handleError('Create', error);
        }
    }
    async findAllWithPaginationOrders(page, limit, search) {
        try {
            logger_1.logger.info(`Order_FindAllPaginated_Entry: page=${page}, limit=${limit}, search=${search}`);
            const query = this.getBaseQuery();
            if (search === null || search === void 0 ? void 0 : search.trim()) {
                const searchTerm = search.trim();
                query.andWhere(new typeorm_2.Brackets(qb => {
                    qb.where('o.order_id::text ILIKE :search')
                        .orWhere('customer.customer_name ILIKE :search');
                }));
                query.setParameter('search', `%${searchTerm}%`);
            }
            const [data, total] = await query
                .orderBy('o.created_at', 'DESC')
                .skip((page - 1) * limit)
                .take(limit)
                .getManyAndCount();
            logger_1.logger.info(`Order_FindAllPaginated_Exit: Found ${data.length} orders, total: ${total}`);
            return { data, total };
        }
        catch (error) {
            logger_1.logger.error(`Order_FindAllPaginated_Error: ${error === null || error === void 0 ? void 0 : error.message}`);
            throw error instanceof common_1.HttpException ? error : new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findOneOrder(id) {
        try {
            logger_1.logger.info(`Order_FindOne_Entry: id=${id}`);
            const order = await this.getBaseQuery()
                .andWhere('o.id = :id', { id })
                .getOne();
            if (!order) {
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            logger_1.logger.info(`Order_FindOne_Exit: ${JSON.stringify(order)}`);
            return order;
        }
        catch (error) {
            this.handleError('FindOne', error);
        }
    }
    async updateOrder(id, updateOrderDto) {
        var _a, _b;
        try {
            logger_1.logger.info(`Order_Update_Entry: id=${id}, data=${JSON.stringify(updateOrderDto)}`);
            const existingOrder = await this.findOneOrder(id);
            const updateData = Object.assign({}, updateOrderDto);
            if (updateOrderDto.customer_id || updateOrderDto.property_id) {
                const { customer, property } = await this.validateRelations(Number((_a = updateOrderDto.customer_id) !== null && _a !== void 0 ? _a : existingOrder.customer.id), Number((_b = updateOrderDto.property_id) !== null && _b !== void 0 ? _b : existingOrder.property.id));
                if (updateOrderDto.customer_id) {
                    updateData.customer = customer;
                    delete updateData.customer_id;
                }
                if (updateOrderDto.property_id) {
                    updateData.property = property;
                    delete updateData.property_id;
                }
            }
            if (updateOrderDto.order_id && updateOrderDto.order_id !== existingOrder.order_id) {
                const conflict = await this.repository.findOne({
                    where: { order_id: updateOrderDto.order_id, is_deleted: false }
                });
                if (conflict) {
                    throw new common_1.ConflictException(`Order with ID ${updateOrderDto.order_id} already exists`);
                }
            }
            const result = await this.repository.update(id, updateData);
            logger_1.logger.info(`Order_Update_Exit: ${JSON.stringify(result)}`);
            return result;
        }
        catch (error) {
            this.handleError('Update', error);
        }
    }
    async removeOrder(id) {
        try {
            logger_1.logger.info(`Order_Remove_Entry: id=${id}`);
            await this.findOneOrder(id);
            const result = await this.repository.update(id, {
                is_deleted: true,
                is_active: false,
                deleted_at: new Date()
            });
            logger_1.logger.info(`Order_Remove_Exit: ${JSON.stringify(result)}`);
            return result;
        }
        catch (error) {
            this.handleError('Remove', error);
        }
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orders_entity_1.default)),
    __param(1, (0, typeorm_1.InjectRepository)(property_entity_1.default)),
    __param(2, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map