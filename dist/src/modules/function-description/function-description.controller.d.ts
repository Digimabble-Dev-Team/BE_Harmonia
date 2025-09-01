import { FunctionDescriptionService } from './function-description.service';
import { CreateFunctionDescriptionDto } from './dto/create-function-description.dto';
import { UpdateFunctionDescriptionDto } from './dto/update-function-description.dto';
export declare class FunctionDescriptionController {
    private readonly functionDescriptionService;
    constructor(functionDescriptionService: FunctionDescriptionService);
    create(createDto: CreateFunctionDescriptionDto): Promise<import("./entities/function-description.entity").FunctionDescription>;
    findAll(page?: number, limit?: number, search?: string, consultationId?: string): Promise<{
        data: import("./entities/function-description.entity").FunctionDescription[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/function-description.entity").FunctionDescription>;
    update(id: string, updateDto: UpdateFunctionDescriptionDto): Promise<import("./entities/function-description.entity").FunctionDescription>;
    remove(id: string): Promise<void>;
}
