import { PatientsService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PaginationDto } from 'src/core/interfaces/shared.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    create(reqBody: CreatePatientDto): Promise<any>;
    findAll(queryParams: PaginationDto): Promise<any>;
    findOne(id: string): Promise<any>;
    findPatient(value: string): Promise<any>;
    private isUUID;
    update(id: string, reqBody: Partial<UpdatePatientDto>): Promise<any>;
    remove(id: string): Promise<any>;
}
