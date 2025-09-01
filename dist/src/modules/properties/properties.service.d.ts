import { Repository, UpdateResult, FindOneOptions, FindManyOptions } from 'typeorm';
import { BaseService } from 'src/base.service';
import Property from './entities/property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertiesService extends BaseService<Property> {
    private readonly propertyRepository;
    protected repository: Repository<Property>;
    constructor(propertyRepository: Repository<Property>);
    createProperty(createPropertyDto: CreatePropertyDto): Promise<Property>;
    findAllProperties(options?: FindManyOptions<Property>): Promise<Property[]>;
    findOneProperty(id: number, options?: FindOneOptions<Property>): Promise<Property | null>;
    updateProperty(id: number, updatePropertyDto: UpdatePropertyDto): Promise<UpdateResult>;
    removeProperty(id: number): Promise<UpdateResult>;
    destroyProperty(id: string): Promise<void>;
}
