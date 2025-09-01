import { Repository } from 'typeorm';
import { Specialization } from './entities/specialization.entity';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Department } from '../Department/entities/department.entity';
export declare class SpecializationService {
    private readonly specializationRepository;
    private readonly departmentRepository;
    constructor(specializationRepository: Repository<Specialization>, departmentRepository: Repository<Department>);
    create(createDto: CreateSpecializationDto): Promise<Specialization>;
    findAll(page: number, limit: number, search?: string): Promise<{
        data: Specialization[];
        total: number;
    }>;
    findOne(specialization_id: number): Promise<Specialization>;
    update(specialization_id: number, updateDto: UpdateSpecializationDto): Promise<Specialization>;
    remove(specialization_id: number): Promise<void>;
}
