import { LeadStatus } from '../entities/lead.entity';
export declare class LeadQueryDto {
    pagNo?: number;
    limit?: number;
    status?: LeadStatus;
    searchText?: string;
}
