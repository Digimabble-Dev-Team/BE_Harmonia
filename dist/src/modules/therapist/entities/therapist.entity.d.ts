import { Department } from 'src/modules/Department/entities/department.entity';
import { Language } from 'src/modules/language/entities/language.entity';
import { Branch } from 'src/modules/branches/entities/branch.entity';
import { Specialization } from 'src/modules/specialization/entities/specialization.entity';
export declare class Therapist {
    therapistId: number;
    firstName: string;
    lastName: string;
    fullName: string;
    photo: string;
    contactEmail: string;
    contactPhone: string;
    aboutMe: string;
    degreesTraining: string;
    inamiNumber: number;
    paymentMethods: any;
    faq: string;
    departmentId: number;
    department: Department;
    specializations: Specialization[];
    languages: Language[];
    branches: Branch[];
    availability: {
        day: string;
        startTime: string;
        endTime: string;
    }[];
    isDelete: boolean;
    deletedAt?: Date;
}
