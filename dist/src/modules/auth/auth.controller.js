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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../core/constants");
const handle_response_1 = __importDefault(require("../../core/utils/handle_response"));
const login_dto_1 = require("./dto/login-dto");
const password_reset_dto_1 = require("./dto/password-reset.dto");
const signup_dto_1 = require("./dto/signup.dto");
const encryption_util_1 = require("../../core/utils/encryption.util");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const users_service_1 = require("../users/users.service");
const common_2 = require("@nestjs/common");
const logger = new common_2.Logger('AuthController');
let AuthController = AuthController_1 = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
        this.logger = new common_2.Logger(AuthController_1.name);
    }
    async login(reqBody) {
        try {
            this.logger.debug(' Encrypted login request received:');
            this.logger.debug('Object:', reqBody);
            let decryptedObject;
            if (reqBody.data) {
                const decrypted = encryption_util_1.AES.decrypt(reqBody.data);
                decryptedObject = typeof decrypted === 'string' ? JSON.parse(decrypted) : decrypted;
                this.logger.debug(' Decrypted login body:', decryptedObject);
            }
            else {
                decryptedObject = reqBody;
                this.logger.debug(' Plain login body:', decryptedObject);
            }
            const dto = (0, class_transformer_1.plainToClass)(login_dto_1.LoginDto, decryptedObject);
            await (0, class_validator_1.validateOrReject)(dto);
            const data = await this.authService.loginWithEmail(dto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM106, data);
        }
        catch (error) {
            this.logger.error(' Login failed:');
            this.logger.error(error);
            return handle_response_1.default.buildErrObj(error.status || 500, constants_1.EM100, error);
        }
    }
    async signupAdmin(reqBody) {
        try {
            console.log('Encrypted body:', reqBody);
            let decryptedObject;
            if (reqBody.data) {
                const decryptedString = encryption_util_1.AES.decrypt(reqBody.data);
                decryptedObject = JSON.parse(decryptedString);
                console.log('Decrypted body:', decryptedString, decryptedObject);
            }
            else {
                decryptedObject = reqBody;
                console.log('Plain body:', decryptedObject);
            }
            const dto = (0, class_transformer_1.plainToClass)(signup_dto_1.SignupAdminDto, decryptedObject);
            await (0, class_validator_1.validateOrReject)(dto);
            const data = await this.authService.signup(dto, 'admin');
            return handle_response_1.default.buildSuccessObj(201, 'Admin signup successful! Please verify your email.', data);
        }
        catch (error) {
            console.error('Signup Admin Error:', error);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async forgotPassword(body) {
        try {
            let data = await this.authService.forgotPassword(body.email_id);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM141, data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj((error === null || error === void 0 ? void 0 : error.status) || constants_1.EC500, (error === null || error === void 0 ? void 0 : error.message) || constants_1.EM100, error);
        }
    }
    async resetPassword(body) {
        try {
            let data = await this.authService.resetPassword(body.token, body.password);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, 'Password reset successfully', data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj((error === null || error === void 0 ? void 0 : error.status) || constants_1.EC500, (error === null || error === void 0 ? void 0 : error.message) || constants_1.EM100, error);
        }
    }
    async refresh(body) {
        try {
            const data = await this.authService.refreshToken(body.token);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, 'Token refreshed successfully', data);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj((error === null || error === void 0 ? void 0 : error.status) || constants_1.EC500, (error === null || error === void 0 ? void 0 : error.message) || constants_1.EM100, error);
        }
    }
    async deleteUser(deleteDto) {
        try {
            let data = await this.authService.deleteUserData(deleteDto);
            if (data && (data === null || data === void 0 ? void 0 : data.code) === constants_1.EC204)
                return data;
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM127, null);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj(constants_1.EC500 || error.status, (error === null || error === void 0 ? void 0 : error.message) || constants_1.EM100, error);
        }
    }
    async logout(logoutDto) {
        try {
            let data = await this.authService.logout(logoutDto);
            return handle_response_1.default.buildSuccessObj(constants_1.EC200, constants_1.EM149, null);
        }
        catch (error) {
            return handle_response_1.default.buildErrObj(constants_1.EC500 || error.status, (error === null || error === void 0 ? void 0 : error.message) || constants_1.EM100, error);
        }
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login with email and password (AES encrypted or plain JSON)' }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login success. Returns JWT tokens.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation failed or bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('signup-admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Signup as admin (plain JSON only)' }),
    (0, swagger_1.ApiBody)({ type: signup_dto_1.SignupAdminDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Signup successful' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation failed or data is missing' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signupAdmin", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Send password reset link to email' }),
    (0, swagger_1.ApiBody)({ type: password_reset_dto_1.ForgotPasswordDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reset link sent if user exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_reset_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Reset password using token' }),
    (0, swagger_1.ApiBody)({ type: password_reset_dto_1.ResetPasswordDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password reset successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_reset_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh JWT token' }),
    (0, swagger_1.ApiBody)({ schema: { example: { token: 'jwt-refresh-token-here' } } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('destroy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.DeleteDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.userlogoutDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = AuthController_1 = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map