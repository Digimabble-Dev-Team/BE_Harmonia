export declare class CreateOrderDto {
    order_id: number;
    customer_id: number;
    property_id: number;
    purchase_date: string;
    amount: number;
    currency: string;
    amount_status?: string;
}
