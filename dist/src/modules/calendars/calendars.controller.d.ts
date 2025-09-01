import { CalendarsService } from './calendars.service';
import { FindAllCalendarsQueryDto } from './dto/find-all-calendars-query.dto';
export declare class CalendarsController {
    private readonly calendarsService;
    constructor(calendarsService: CalendarsService);
    private handleError;
    findAll(query: FindAllCalendarsQueryDto): Promise<any>;
}
