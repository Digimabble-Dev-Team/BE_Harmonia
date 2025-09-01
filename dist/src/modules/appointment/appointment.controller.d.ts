import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentsService } from './appointment.service';
import { FindAllAppointmentsQueryDto } from './dto/find-all-appointments-query.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    private handleError;
    create(createAppointmentDto: CreateAppointmentDto): Promise<any>;
    findAll(query: FindAllAppointmentsQueryDto): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<any>;
    remove(id: number): Promise<any>;
}
