import { BaseModel } from 'src/core/database/BaseModel';
import { Therapist } from 'src/modules/therapist/entities/therapist.entity';
import { Patient } from 'src/modules/customers/entities/patient.entity';
import { TeamMember } from 'src/modules/team-member/entities/team-member.entity';
import { Branch } from 'src/modules/branches/entities/branch.entity';
export declare enum PurposeOfVisit {
    CONSULTATION = "Consultation",
    FOLLOW_UP = "Follow-up",
    THERAPY_SESSION = "Therapy Session",
    INITIAL_ASSESSMENT = "Initial Assessment"
}
export declare enum Department {
    PSYCHOLOGY = "Psychology",
    PHYSIOTHERAPY = "Physiotherapy",
    NUTRITION = "Nutrition",
    GENERAL_MEDICINE = "General Medicine"
}
export default class Appointment extends BaseModel {
    branch: Branch;
    patient: Patient;
    date: Date;
    timeslot: string;
    purposeOfVisit: PurposeOfVisit;
    department: Department;
    description: string;
    therapist: Therapist;
    createdBy: TeamMember;
    modifiedBy: TeamMember;
}
