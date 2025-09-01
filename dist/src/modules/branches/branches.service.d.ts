import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
export declare class BranchesService {
    private readonly branchRepository;
    constructor(branchRepository: Repository<Branch>);
    create(createBranchDto: CreateBranchDto): Promise<Branch>;
    findAll(page: number, limit: number, search?: string): Promise<{
        data: Branch[];
        total: number;
    }>;
    findOne(branch_id: number): Promise<Branch>;
    update(branch_id: number, updateBranchDto: UpdateBranchDto): Promise<Branch>;
    remove(branch_id: number): Promise<void>;
}
