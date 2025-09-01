import { Consultation } from 'src/modules/consultations/entities/consultation.entity';
import { Therapist } from 'src/modules/therapist/entities/therapist.entity';
export declare class Branch {
    branch_id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    location: string;
    consultations: Consultation[];
    therapists: Therapist[];
    is_active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
