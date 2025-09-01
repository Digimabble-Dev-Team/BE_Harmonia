import { SpecializationType } from '../entities/specialization.entity';
export declare class CreateSpecializationDto {
    department_id: number;
    specialization_type: SpecializationType;
    description?: string;
}
