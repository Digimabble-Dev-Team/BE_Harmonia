import { TherapistService } from './therapists.service';
import { CreateTherapistDto } from './dto/create-therapist.dto';
import { UpdateTherapistDto } from './dto/update-therapist.dto';
import { TherapistFilterDto } from './dto/therapist-filter.dto';
import { Therapist } from './entities/therapist.entity';
export declare class TherapistController {
    private readonly therapistService;
    constructor(therapistService: TherapistService);
    create(dto: CreateTherapistDto): Promise<Therapist>;
    findAll(filter: TherapistFilterDto): Promise<Therapist[]>;
    search(q: string): Promise<Therapist[]>;
    findOne(id: number): Promise<Therapist>;
    update(id: number, dto: UpdateTherapistDto): Promise<Therapist>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
    restore(id: number): Promise<Therapist>;
}
