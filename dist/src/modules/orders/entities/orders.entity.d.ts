import { BaseModel } from 'src/core/database/BaseModel';
import Property from 'src/modules/properties/entities/property.entity';
import { Patient } from 'src/modules/customers/entities/patient.entity';
export default class Order extends BaseModel {
    order_id: number;
    customer: Patient;
    property: Property;
    purchase_date: Date;
    amount: number;
    currency: string;
    amount_status: string;
    is_deleted: boolean;
}
