import { PurposeOfVisit, Department } from '../entities/appointment.entity';
export declare class CreateAppointmentDto {
    branchId: number;
    patientId: string;
    date: string;
    timeslot: string;
    purposeOfVisit: PurposeOfVisit;
    department: Department;
    description?: string;
    therapistKey: number;
    createdById: string;
}
