import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    findByPostalCode(postalcode: string): Promise<any>;
}
