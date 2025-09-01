import { Repository } from 'typeorm';
import { FunctionDescription } from './entities/function-description.entity';
import { CreateFunctionDescriptionDto } from './dto/create-function-description.dto';
import { UpdateFunctionDescriptionDto } from './dto/update-function-description.dto';
import { Therapist } from 'src/modules/therapist/entities/therapist.entity';
export declare class FunctionDescriptionService {
    private readonly functionDescriptionRepository;
    private readonly therapistRepository;
    constructor(functionDescriptionRepository: Repository<FunctionDescription>, therapistRepository: Repository<Therapist>);
    create(createDto: CreateFunctionDescriptionDto): Promise<FunctionDescription>;
    findAll(page: number, limit: number, search?: string, consultationId?: string): Promise<{
        data: FunctionDescription[];
        total: number;
    }>;
    findOne(function_id: string): Promise<FunctionDescription>;
    update(function_id: string, updateDto: UpdateFunctionDescriptionDto): Promise<FunctionDescription>;
    remove(function_id: string): Promise<void>;
}
