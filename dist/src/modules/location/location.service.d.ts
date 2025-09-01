import { HttpService } from '@nestjs/axios';
import { LocationResponseDto } from './dto/location.dto';
export declare class LocationService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private detectCountryByPostalCode;
    findByPostalCode(postalCode: string): Promise<LocationResponseDto>;
    private fetchLocationData;
    findByZipcode(zipcode: string): Promise<LocationResponseDto>;
}
