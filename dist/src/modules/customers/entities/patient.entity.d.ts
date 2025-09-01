import { Therapist } from 'src/modules/therapist/entities/therapist.entity';
export declare class Patient {
    id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    ssin: string;
    legalgender: string;
    language: string;
    birthdate: Date | null;
    primarypatientrecordid: string;
    note: string;
    status: string;
    mutualitynumber: string;
    mutualityregistrationnumber: string;
    emails: string;
    country: string;
    city: string;
    street: string;
    phones: string[];
    zipcode: string;
    number: string;
    therapist?: Therapist;
    therapistId?: number;
    is_delete: boolean;
    deleted_at: Date | null;
}
