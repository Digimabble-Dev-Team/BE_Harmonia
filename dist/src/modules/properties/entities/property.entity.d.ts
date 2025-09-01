import { BaseModel } from 'src/core/database/BaseModel';
export default class Property extends BaseModel {
    name: string;
    category: number;
    listing_type: string;
    bedrooms: number;
    bathrooms: number;
    square_foot: number;
    floor: number;
    price: number;
    address_id: number;
    image: string;
}
