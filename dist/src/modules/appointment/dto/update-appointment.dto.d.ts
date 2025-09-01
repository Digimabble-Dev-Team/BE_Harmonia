import { CreateAppointmentDto } from './create-appointment.dto';
declare const UpdateAppointmentDto_base: import("@nestjs/common").Type<Partial<Omit<CreateAppointmentDto, "createdById">>>;
export declare class UpdateAppointmentDto extends UpdateAppointmentDto_base {
    modifiedById: string;
}
export {};
