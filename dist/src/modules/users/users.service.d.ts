import { Repository, FindOneOptions } from 'typeorm';
import { BaseService } from 'src/base.service';
import { VerifyOtpDto } from '../auth/dto/verify-otp.dto';
import { UpdateUserDto } from './dto/user.dto';
import User from 'src/modules/users/entities/user.entity';
import { Token } from './entities/token.entity';
import { Address } from '../addresses/entities/address.entity';
export declare class UsersService extends BaseService<User> {
    private readonly userRepository;
    private readonly tokenRepository;
    private readonly addressRepository;
    protected repository: Repository<User>;
    constructor(userRepository: Repository<User>, tokenRepository: Repository<Token>, addressRepository: Repository<Address>);
    create(user: Partial<User>): Promise<User>;
    findOneById(id: string | number, options?: FindOneOptions<User>): Promise<User | null>;
    findOneByEmail(email: string): Promise<User | null>;
    updateProfile(body: UpdateUserDto | VerifyOtpDto): Promise<User>;
    createPasswordResetToken(email: string, token: string): Promise<Token>;
    findTokenByTokenAndType(token: string, type: string): Promise<Token | null>;
    deleteTokensByEmailAndType(email: string, type: string): Promise<void>;
    verifyToken(token: string, type: string): Promise<{
        valid: boolean;
        email?: string;
    }>;
    findOneByIdForAddress(id: number): Promise<User | null>;
}
