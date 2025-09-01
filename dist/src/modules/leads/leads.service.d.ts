import { Repository, UpdateResult } from 'typeorm';
import { BaseService } from 'src/base.service';
import { Lead } from './entities/lead.entity';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { Patient } from '../customers/entities/patient.entity';
import Property from '../properties/entities/property.entity';
export declare class LeadsService extends BaseService<Lead> {
    private readonly leadRepository;
    private readonly customerRepository;
    private readonly propertyRepository;
    protected repository: Repository<Lead>;
    constructor(leadRepository: Repository<Lead>, customerRepository: Repository<Patient>, propertyRepository: Repository<Property>);
    private readonly relations;
    createLead(dto: CreateLeadDto): Promise<Lead>;
    findLeadsWithPagination(page: number, limit: number, searchText?: string, status?: string): Promise<{
        data: Lead[];
        total: number;
    }>;
    findOne(id: number): Promise<Lead>;
    update(id: number, dto: UpdateLeadDto): Promise<UpdateResult>;
    remove(id: number): Promise<UpdateResult>;
}
