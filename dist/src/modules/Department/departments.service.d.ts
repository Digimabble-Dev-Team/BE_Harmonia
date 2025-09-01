import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsService {
    private readonly departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    create(dto: CreateDepartmentDto): Promise<Department>;
    findAllFiltered(branchId?: number, search?: string): Promise<Department[]>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, dto: UpdateDepartmentDto): Promise<Department>;
    remove(id: number): Promise<void>;
}
