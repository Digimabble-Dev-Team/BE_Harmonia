import { Repository } from 'typeorm';
import { Consultation } from './entities/consultation.entity';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-function-description.dto';
export declare class ConsultationsService {
    private readonly consultationRepository;
    constructor(consultationRepository: Repository<Consultation>);
    create(createConsultationDto: CreateConsultationDto): Promise<Consultation>;
    findAll(page: number, limit: number, search?: string, branchId?: number): Promise<{
        data: Consultation[];
        total: number;
    }>;
    findOne(consultation_id: string): Promise<Consultation>;
    update(consultation_id: string, updateConsultationDto: UpdateConsultationDto): Promise<Consultation>;
    remove(consultation_id: string): Promise<void>;
}
