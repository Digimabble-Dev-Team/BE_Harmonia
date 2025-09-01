import { Branch } from 'src/modules/branches/entities/branch.entity';
export declare class Consultation {
    consultation_id: string;
    our_consultations: string;
    description: string;
    for_whom: string;
    care_process: string;
    fees_and_reimbursements: string;
    branch: Branch;
    is_active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
