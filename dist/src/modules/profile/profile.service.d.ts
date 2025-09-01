import { Repository } from 'typeorm';
import User from 'src/modules/users/entities/user.entity';
export declare class ProfileService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getProfile(userId: number): Promise<User>;
}
