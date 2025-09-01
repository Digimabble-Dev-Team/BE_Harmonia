import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { FindAllOrdersQueryDto } from './dto/find-all-orders-query.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<any>;
    findAll(query: FindAllOrdersQueryDto): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<any>;
    remove(id: string): Promise<any>;
    private handleError;
}
