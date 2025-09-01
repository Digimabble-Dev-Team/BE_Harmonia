import { Repository } from 'typeorm';
import { Therapist } from './entities/therapist.entity';
import { Language } from 'src/modules/language/entities/language.entity';
import { Branch } from 'src/modules/branches/entities/branch.entity';
import { Specialization } from 'src/modules/specialization/entities/specialization.entity';
import { CreateTherapistDto } from './dto/create-therapist.dto';
import { UpdateTherapistDto } from './dto/update-therapist.dto';
import { TherapistFilterDto } from './dto/therapist-filter.dto';
export declare class TherapistService {
    private therapistRepository;
    private languageRepository;
    private branchRepository;
    private specializationRepository;
    constructor(therapistRepository: Repository<Therapist>, languageRepository: Repository<Language>, branchRepository: Repository<Branch>, specializationRepository: Repository<Specialization>);
    create(dto: CreateTherapistDto): Promise<Therapist>;
    findAll(filter?: TherapistFilterDto): Promise<Therapist[]>;
    search(term: string): Promise<Therapist[]>;
    findOne(id: number): Promise<Therapist>;
    update(id: number, dto: UpdateTherapistDto): Promise<Therapist>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
    restore(id: number): Promise<Therapist>;
}
