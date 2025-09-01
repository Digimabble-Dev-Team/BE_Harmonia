export declare class AvailabilityDto {
    day: string;
    startTime: string;
    endTime: string;
}
export declare class CreateTherapistDto {
    firstName: string;
    lastName: string;
    photo?: string;
    contactEmail: string;
    contactPhone: string;
    aboutMe?: string;
    degreesTraining?: string;
    inamiNumber: number;
    paymentMethods?: any[];
    faq?: string;
    departmentId: number;
    specializations: number[];
    languages: string[];
    branches: number[];
    availability?: AvailabilityDto[];
}
