import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Branch } from './entities/branch.entity';
export declare class BranchesController {
    private readonly branchesService;
    constructor(branchesService: BranchesService);
    create(createBranchDto: CreateBranchDto): Promise<Branch>;
    findAll(page: number, limit: number, search?: string): Promise<{
        data: Branch[];
        total: number;
    }>;
    findOne(id: number): Promise<Branch>;
    update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch>;
    remove(id: number): Promise<void>;
}
