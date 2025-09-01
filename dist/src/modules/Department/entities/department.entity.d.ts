import { Therapist } from 'src/modules/therapist/entities/therapist.entity';
export declare class Department {
    id: number;
    name: string;
    is_active: boolean;
    description: string | null;
    therapists: Therapist[];
}
