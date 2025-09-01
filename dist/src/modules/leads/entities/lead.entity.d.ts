import { BaseModel } from 'src/core/database/BaseModel';
import { Patient } from 'src/modules/customers/entities/patient.entity';
import Property from 'src/modules/properties/entities/property.entity';
export declare enum LeadSource {
    WEBSITE = "Website",
    REFERRAL = "Referral",
    CAMPAIGN = "Campaign",
    WALK_IN = "Walk-in",
    SOCIAL_MEDIA = "Social Media",
    PHONE_CALL = "Phone Call",
    EMAIL = "Email"
}
export declare enum LeadStatus {
    NEW = "New",
    CONTACTED = "Contacted",
    QUALIFIED = "Qualified",
    PROPOSAL_SENT = "Proposal Sent",
    NEGOTIATION = "Negotiation",
    CLOSED_WON = "Closed Won",
    CLOSED_LOST = "Closed Lost",
    FOLLOW_UP = "Follow Up"
}
export declare class Lead extends BaseModel {
    lead_source: LeadSource;
    lead_status: LeadStatus;
    budget_range: number;
    preferred_contact_time: string;
    notes: string;
    date_of_inquiry: Date;
    customer: Patient;
    interested_property: Property;
    is_deleted: boolean;
}
