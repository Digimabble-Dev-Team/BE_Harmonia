import { Consultation } from 'src/modules/consultations/entities/consultation.entity';
import { Therapist } from 'src/modules/therapist/entities/therapist.entity';
export declare class FunctionDescription {
    function_id: string;
    fonction: string;
    function_description_text: string;
    simplification_description: string;
    communication_patients: string;
    tone_communication: string;
    professional_1: string;
    professional_2: string;
    professional_3: string;
    professional_4: string;
    professional_5: string;
    professional_6: string;
    professional_7: string;
    professional_8: string;
    professional_9: string;
    consultation: Consultation;
    therapists: Therapist[];
    is_active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
