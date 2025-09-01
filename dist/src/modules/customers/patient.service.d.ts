import { Repository, FindManyOptions } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { BaseService } from 'src/base.service';
export declare class PatientsService extends BaseService<Patient> {
    private readonly patientRepository;
    protected repository: Repository<Patient>;
    constructor(patientRepository: Repository<Patient>);
    create(createPatientDto: CreatePatientDto): Promise<Patient>;
    findAll(options?: FindManyOptions<Patient>): Promise<Patient[]>;
    findAllWithPagination(page: number, limit: number, options?: FindManyOptions<Patient> & {
        searchText?: string;
        branch?: string;
        fromDate?: string;
        toDate?: string;
    }): Promise<{
        data: Patient[];
        total: number;
    }>;
    findOne(id: string): Promise<Patient>;
    findOneByIdentifier(identifier: {
        id?: string;
        email?: string;
        phone?: string;
    }): Promise<Patient>;
    updatePatient(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient>;
    removePatient(id: string): Promise<void>;
}
