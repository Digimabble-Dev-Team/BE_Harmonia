import { ProfileService } from './profile.service';
import { ProfileDto } from './dto/profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    getProfile(req: any): Promise<ProfileDto>;
}
