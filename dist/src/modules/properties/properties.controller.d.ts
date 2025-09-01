import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PaginationDto } from 'src/core/interfaces/shared.dto';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    create(createPropertyDto: CreatePropertyDto): Promise<any>;
    findAll(paginationDto: PaginationDto): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updatePropertyDto: UpdatePropertyDto): Promise<any>;
    remove(id: string): Promise<any>;
}
