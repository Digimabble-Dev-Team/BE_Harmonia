import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(dto: CreateDepartmentDto): Promise<Department>;
    findAll(branchId?: number, search?: string): Promise<Department[]>;
    findOne(id: string): Promise<Department>;
    update(id: string, dto: UpdateDepartmentDto): Promise<Department>;
    remove(id: string): Promise<void>;
}
