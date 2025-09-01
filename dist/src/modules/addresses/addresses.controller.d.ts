import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    create(createAddressDto: CreateAddressDto): Promise<import("./entities/address.entity").Address>;
    findAll(): Promise<import("./entities/address.entity").Address[]>;
    findOne(id: string): Promise<import("./entities/address.entity").Address>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
