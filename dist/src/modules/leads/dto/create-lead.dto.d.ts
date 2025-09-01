import { LeadSource, LeadStatus } from '../entities/lead.entity';
export declare class CreateLeadDto {
    lead_source: LeadSource;
    lead_status: LeadStatus;
    customer_id: number;
    interested_property_id: number;
    budget_range?: number;
    preferred_contact_time?: string;
    notes?: string;
    date_of_inquiry: string;
    is_active?: boolean;
}
