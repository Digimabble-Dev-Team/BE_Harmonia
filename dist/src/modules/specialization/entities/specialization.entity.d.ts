import { Department } from 'src/modules/Department/entities/department.entity';
export declare enum SpecializationType {
    CONSULTATION = "Consultation",
    OPERATION = "Operation",
    OTHER = "Other"
}
export declare class Specialization {
    specialization_id: number;
    department: Department;
    specialization_type: SpecializationType;
    description: string;
    is_active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
