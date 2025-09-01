import { Repository } from "typeorm";
import { Address } from "./entities/address.entity";
import { CreateAddressDto } from "./dto/create-address.dto";
import { BaseService } from 'src/base.service';
export declare class AddressesService extends BaseService<Address> {
    private readonly addressRepository;
    protected repository: Repository<Address>;
    constructor(addressRepository: Repository<Address>);
    findOne(id: number): Promise<Address>;
    create(createAddressDto: CreateAddressDto): Promise<Address>;
}
