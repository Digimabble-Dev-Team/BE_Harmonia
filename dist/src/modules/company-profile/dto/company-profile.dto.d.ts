import { CreateAddressDto } from 'src/modules/addresses/dto/create-address.dto';
export declare class CompanyProfileDto {
    company_name: string;
    mobile_no: string;
    website?: string;
    tax_id?: string;
    logo?: string;
    address: CreateAddressDto;
}
export declare class UpdateCompanyProfileDto {
    company_name: string;
    mobile_no: string;
    website?: string;
    tax_id?: string;
    logo?: string;
    address?: CreateAddressDto;
}
