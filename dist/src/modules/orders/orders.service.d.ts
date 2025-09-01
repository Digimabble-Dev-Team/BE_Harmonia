import { Repository, UpdateResult } from 'typeorm';
import { BaseService } from 'src/base.service';
import Property from 'src/modules/properties/entities/property.entity';
import { Patient } from 'src/modules/customers/entities/patient.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import Order from './entities/orders.entity';
export declare class OrdersService extends BaseService<Order> {
    private readonly orderRepository;
    private readonly propertyRepository;
    private readonly customerRepository;
    protected repository: Repository<Order>;
    constructor(orderRepository: Repository<Order>, propertyRepository: Repository<Property>, customerRepository: Repository<Patient>);
    private getBaseQuery;
    private handleError;
    private validateRelations;
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    findAllWithPaginationOrders(page: number, limit: number, search?: string): Promise<{
        data: Order[];
        total: number;
    }>;
    findOneOrder(id: number): Promise<Order>;
    updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<UpdateResult>;
    removeOrder(id: number): Promise<UpdateResult>;
}
