import { CreateAddressDto } from 'src/modules/addresses/dto/create-address.dto';
export declare class SignupAgentDto {
    name: string;
    email_id: string;
    password: string;
    mobile_no: string;
    address: CreateAddressDto;
    device_token?: string;
}
