"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const logger_1 = require("../../core/utils/logger");
const error_enums_1 = require("../../core/constants/error_enums");
const mailUtils_1 = require("../../core/utils/mailUtils");
const encryption_1 = __importDefault(require("../../core/utils/encryption"));
const addresses_service_1 = require("../addresses/addresses.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, addressesService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.addressesService = addressesService;
    }
    async signup(signupData, user_type) {
        logger_1.logger.info(`Signup_Entry: Email=${signupData.email_id} | UserType=${user_type}`);
        const existingUser = await this.userService.findOneByEmail(signupData.email_id);
        if (existingUser) {
            logger_1.logger.warn(`Signup_Failure: Email=${signupData.email_id} | Reason=EmailAlreadyExists`);
            throw new common_1.ConflictException(error_enums_1.Errors.EMAIL_ID_ALREADY_EXISTS);
        }
        try {
            const userData = Object.assign({}, signupData);
            const newUser = await this.userService.create(userData);
            const { access_token, refresh_token } = await this.generateTokens({
                user_id: newUser.id,
                email: newUser.email_id,
            });
            const { password } = newUser, userResponse = __rest(newUser, ["password"]);
            return Object.assign(Object.assign({}, userResponse), { access_token,
                refresh_token });
        }
        catch (error) {
            throw error;
        }
    }
    async loginWithEmail({ email_id, password, remember_me }) {
        logger_1.logger.info(`Login_Entry: ` + JSON.stringify({ email_id, remember_me }));
        const user = await this.userService.findOneByEmail(email_id);
        if (!user) {
            logger_1.logger.info(`Login_User_Not_Found: ${email_id}`);
            throw new common_1.NotFoundException(error_enums_1.Errors.USER_NOT_EXISTS);
        }
        if (!user.password) {
            logger_1.logger.info(`Login_Password_Missing: ${email_id}`);
            throw new common_1.UnauthorizedException(error_enums_1.Errors.INVALID_USER_DETAILS);
        }
        if (!encryption_1.default.comparePassword(password, user.password)) {
            logger_1.logger.info(`Login_Invalid_Password: ${email_id}`);
            throw new common_1.UnauthorizedException(error_enums_1.Errors.INCORRECT_USER_PASSWORD);
        }
        const { access_token, refresh_token } = await this.generateTokens({ user_id: user.id }, remember_me);
        const { password: _ } = user, userResponse = __rest(user, ["password"]);
        logger_1.logger.info(`Login_Success: ${email_id}`);
        return {
            user: userResponse,
            accessToken: access_token,
            refreshToken: refresh_token,
        };
    }
    async generateTokens(payload, remember_me = false) {
        const accessTokenPayload = Object.assign({}, payload);
        const refreshTokenPayload = Object.assign(Object.assign({}, payload), { remember_me });
        const access_token = await this.generateToken(accessTokenPayload, false, remember_me);
        const refresh_token = await this.generateToken(refreshTokenPayload, true, remember_me);
        return { access_token, refresh_token };
    }
    async generateToken(payload, isRefreshToken = false, remember_me = false) {
        const expiresIn = isRefreshToken
            ? remember_me ? '30d' : '2h'
            : '1h';
        console.log(expiresIn, ` expiresIn`);
        return this.jwtService.signAsync(payload, {
            secret: process.env.JWTKEY,
            expiresIn,
        });
    }
    async refreshToken(token) {
        try {
            const decoded = this.jwtService.verify(token, { secret: process.env.JWTKEY });
            const user = await this.userService.findOneById(decoded.user_id);
            if (!user)
                throw new common_1.NotFoundException(error_enums_1.Errors.USER_NOT_EXISTS);
            const shouldRemember = decoded.remember_me || false;
            const { access_token, refresh_token } = await this.generateTokens({ user_id: user.id }, shouldRemember);
            return { accessToken: access_token, refreshToken: refresh_token };
        }
        catch (error) {
            throw new common_1.NotFoundException(error_enums_1.Errors.INVALID_TOKEN);
        }
    }
    async forgotPassword(email_id) {
        const user = await this.userService.findOneByEmail(email_id);
        if (!user) {
            logger_1.logger.warn(`Forgot password attempt for non-existent email: ${email_id}`);
            throw new common_1.NotFoundException(error_enums_1.Errors.USER_NOT_EXISTS);
        }
        try {
            logger_1.logger.debug(`User found: ${user.email_id}`);
            const resetToken = await this.generateToken({
                user_id: user.id,
                email: user.email_id,
                purpose: 'password_reset'
            }, true);
            logger_1.logger.debug(`Token generated: ${resetToken}`);
            await this.userService.createPasswordResetToken(email_id, resetToken);
            logger_1.logger.debug(`Token saved to DB`);
            const resetUrl = `${process.env.FRONTEND_BASE_URL}/auth/reset-password?token=${resetToken}`;
            logger_1.logger.debug(`Reset URL: ${resetUrl}`);
            await mailUtils_1.MailUtils.sendPasswordResetEmail(email_id, resetUrl);
            logger_1.logger.debug(`Email sent`);
            return { message: 'If a user with that email exists, a password reset link has been sent.' };
        }
        catch (error) {
            logger_1.logger.error(`Error processing password reset for ${email_id}: ${error.message}`);
            logger_1.logger.error(error.stack);
            throw new common_1.HttpException('An unexpected error occurred while processing your request.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async resetPassword(token, newPassword) {
        const { valid, email } = await this.userService.verifyToken(token, 'password_reset');
        if (!valid || !email) {
            logger_1.logger.warn(`ResetPassword_Failure: Token invalid or expired`);
            throw new common_1.NotFoundException('Invalid or expired password reset token');
        }
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            logger_1.logger.warn(`ResetPassword_Failure: User not found for email ${email}`);
            throw new common_1.NotFoundException(error_enums_1.Errors.USER_NOT_EXISTS);
        }
        try {
            await this.userService.update(user.id, {
                password: encryption_1.default.hashPassword(newPassword)
            });
            await this.userService.deleteTokensByEmailAndType(email, 'password_reset');
            logger_1.logger.info(`ResetPassword_Success: User=${user.id} | Email=${email}`);
            return { message: 'Password has been reset successfully' };
        }
        catch (error) {
            logger_1.logger.error(`ResetPassword_Error: Email=${email} | Error=${error.message}`);
            throw error;
        }
    }
    async deleteUserData(req_data) {
        return this.userService.destroy(req_data.identity);
    }
    async logout(req) {
        return this.userService.update(req.user_id, { device_token: null });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        addresses_service_1.AddressesService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map