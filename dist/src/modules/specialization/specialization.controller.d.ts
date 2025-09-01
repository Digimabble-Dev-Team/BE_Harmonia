import { SpecializationService } from './specialization.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { FindAllSpecializationsQueryDto } from './dto/find-all-specializations-query.dto';
export declare class SpecializationController {
    private readonly specializationService;
    constructor(specializationService: SpecializationService);
    create(createDto: CreateSpecializationDto): Promise<import("./entities/specialization.entity").Specialization>;
    findAll(query: FindAllSpecializationsQueryDto): Promise<{
        data: import("./entities/specialization.entity").Specialization[];
        total: number;
    }>;
    findOne(id: number): Promise<import("./entities/specialization.entity").Specialization>;
    update(id: number, updateDto: UpdateSpecializationDto): Promise<import("./entities/specialization.entity").Specialization>;
    remove(id: number): Promise<void>;
}
