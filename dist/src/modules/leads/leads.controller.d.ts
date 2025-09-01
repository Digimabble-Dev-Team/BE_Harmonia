import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { LeadQueryDto } from './dto/lead-query.dto';
export declare class LeadsController {
    private readonly leadsService;
    constructor(leadsService: LeadsService);
    create(createLeadDto: CreateLeadDto): Promise<any>;
    findAll(queryDto: LeadQueryDto): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateLeadDto: UpdateLeadDto): Promise<any>;
    remove(id: string): Promise<any>;
}
