import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { BaseService } from 'src/base.service';
import { Patient } from 'src/modules/customers/entities/patient.entity';
import Appointment from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Therapist } from '../therapist/entities/therapist.entity';
import { TeamMember } from 'src/modules/team-member/entities/team-member.entity';
import { Branch } from 'src/modules/branches/entities/branch.entity';
export declare class AppointmentsService extends BaseService<Appointment> {
    private readonly appointmentRepository;
    private readonly patientRepository;
    private readonly therapistRepository;
    private readonly teamMemberRepository;
    private readonly branchRepository;
    protected repository: Repository<Appointment>;
    constructor(appointmentRepository: Repository<Appointment>, patientRepository: Repository<Patient>, therapistRepository: Repository<Therapist>, teamMemberRepository: Repository<TeamMember>, branchRepository: Repository<Branch>);
    private getBaseQuery;
    private handleError;
    private validateRelations;
    createAppointment(createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    findAllWithPaginationAppointments(page: number, limit: number, search?: string): Promise<{
        data: Appointment[];
        total: number;
    }>;
    findOneAppointment(id: number): Promise<Appointment>;
    updateAppointment(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<UpdateResult>;
    removeAppointment(id: number): Promise<DeleteResult>;
}
