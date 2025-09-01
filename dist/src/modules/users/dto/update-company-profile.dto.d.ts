import { CreateAddressDto } from 'src/modules/addresses/dto/create-address.dto';
export declare class UpdateCompanyProfileDto {
    company_name: string;
    logo?: string;
    address: CreateAddressDto;
    mobile_no?: string;
    email: string;
    website?: string;
    tax_id?: string;
}
