import { Repository } from 'typeorm';
import { Calendar } from './entities/calendar.entity';
export declare class CalendarsService {
    private readonly calendarRepository;
    constructor(calendarRepository: Repository<Calendar>);
    private handleError;
    findAllWithPagination(page: number, limit: number, search?: string): Promise<{
        data: Calendar[];
        total: number;
    }>;
}
