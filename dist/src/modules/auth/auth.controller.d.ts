import { AuthService } from './auth.service';
import { DeleteDto, userlogoutDto } from './dto/login-dto';
import { ForgotPasswordDto, ResetPasswordDto } from './dto/password-reset.dto';
import { UsersService } from 'src/modules/users/users.service';
export declare class AuthController {
    private authService;
    private readonly usersService;
    private readonly logger;
    constructor(authService: AuthService, usersService: UsersService);
    login(reqBody: any): Promise<any>;
    signupAdmin(reqBody: any): Promise<any>;
    forgotPassword(body: ForgotPasswordDto): Promise<any>;
    resetPassword(body: ResetPasswordDto): Promise<any>;
    refresh(body: {
        token: string;
    }): Promise<any>;
    deleteUser(deleteDto: DeleteDto): Promise<any>;
    logout(logoutDto: userlogoutDto): Promise<any>;
}
