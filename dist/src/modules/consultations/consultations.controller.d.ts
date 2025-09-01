import { ConsultationsService } from './consultations.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-function-description.dto';
export declare class ConsultationsController {
    private readonly consultationsService;
    constructor(consultationsService: ConsultationsService);
    create(createConsultationDto: CreateConsultationDto): Promise<import("./entities/consultation.entity").Consultation>;
    findAll(page?: number, limit?: number, search?: string, branchId?: number): Promise<{
        data: import("./entities/consultation.entity").Consultation[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/consultation.entity").Consultation>;
    update(id: string, updateConsultationDto: UpdateConsultationDto): Promise<import("./entities/consultation.entity").Consultation>;
    remove(id: string): Promise<void>;
}
