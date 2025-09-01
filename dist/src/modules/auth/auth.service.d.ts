import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import User from 'src/modules/users/entities/user.entity';
import { DeleteDto, LoginDto, userlogoutDto } from './dto/login-dto';
import { AddressesService } from '../addresses/addresses.service';
import { SignupAdminDto } from './dto/signup.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly addressesService;
    constructor(userService: UsersService, jwtService: JwtService, addressesService: AddressesService);
    signup(signupData: SignupAdminDto, user_type: 'admin'): Promise<any>;
    loginWithEmail({ email_id, password, remember_me }: LoginDto): Promise<{
        user: Partial<User>;
        accessToken: string;
        refreshToken: string;
    }>;
    generateTokens(payload: any, remember_me?: boolean): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    generateToken(payload: any, isRefreshToken?: boolean, remember_me?: boolean): Promise<string>;
    refreshToken(token: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    forgotPassword(email_id: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        message: string;
    }>;
    deleteUserData(req_data: DeleteDto): Promise<void>;
    logout(req: userlogoutDto): Promise<import("typeorm").UpdateResult>;
}
