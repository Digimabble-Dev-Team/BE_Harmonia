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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const base_service_1 = require("../../base.service");
const error_enums_1 = require("../../core/constants/error_enums");
const logger_1 = require("../../core/utils/logger");
const user_entity_1 = __importDefault(require("./entities/user.entity"));
const moment_1 = __importDefault(require("moment"));
const typeorm_2 = require("@nestjs/typeorm");
const token_entity_1 = require("./entities/token.entity");
const address_entity_1 = require("../addresses/entities/address.entity");
let UsersService = class UsersService extends base_service_1.BaseService {
    constructor(userRepository, tokenRepository, addressRepository) {
        super(userRepository.manager);
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.addressRepository = addressRepository;
        this.repository = userRepository;
    }
    async create(user) {
        return await super.create(user);
    }
    async findOneById(id, options) {
        const userId = typeof id === 'string' ? parseInt(id, 10) : id;
        return await this.repository.findOne(Object.assign({ where: { id: userId } }, (options || {})));
    }
    async findOneByEmail(email) {
        return await this.repository.findOne({
            where: { email_id: email }
        });
    }
    async updateProfile(body) {
        logger_1.logger.info(`User_UpdateProfile_Entry: ${JSON.stringify(body)}`);
        const userId = 'id' in body ? Number(body.id) : Number(body.user_id);
        if ('email_id' in body) {
            const existingUser = await this.repository.findOne({
                where: { email_id: body.email_id, id: (0, typeorm_1.Not)(userId) },
            });
            if (existingUser) {
                throw new common_1.ConflictException(error_enums_1.Errors.EMAIL_ID_ALREADY_EXISTS);
            }
        }
        await super.update(userId, body);
        const updatedUser = await this.findOneById(userId);
        logger_1.logger.info(`User_UpdateProfile_Exit: ${JSON.stringify(updatedUser)}`);
        return updatedUser;
    }
    async createPasswordResetToken(email, token) {
        await this.deleteTokensByEmailAndType(email, 'password_reset');
        const tokenData = {
            user_email: email,
            token: token,
            type: 'password_reset',
            created_at: (0, moment_1.default)().utc().toDate(),
            expires_at: (0, moment_1.default)().add(30, 'minutes').utc().toDate(),
        };
        const newToken = this.tokenRepository.create(tokenData);
        return await this.tokenRepository.save(newToken);
    }
    async findTokenByTokenAndType(token, type) {
        return await this.tokenRepository.findOne({
            where: { token, type }
        });
    }
    async deleteTokensByEmailAndType(email, type) {
        await this.tokenRepository.delete({ user_email: email, type });
    }
    async verifyToken(token, type) {
        const tokenRecord = await this.findTokenByTokenAndType(token, type);
        if (!tokenRecord) {
            return { valid: false };
        }
        const now = (0, moment_1.default)().utc();
        const expiresAt = (0, moment_1.default)(tokenRecord.expires_at).utc();
        if (now.isAfter(expiresAt)) {
            await this.tokenRepository.delete({ id: tokenRecord.id });
            logger_1.logger.info(`Token expired and deleted: ${token}`);
            return { valid: false };
        }
        return { valid: true, email: tokenRecord.user_email };
    }
    async findOneByIdForAddress(id) {
        return this.userRepository.findOne({
            where: { id },
            relations: ['address'],
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.default)),
    __param(1, (0, typeorm_2.InjectRepository)(token_entity_1.Token)),
    __param(2, (0, typeorm_2.InjectRepository)(address_entity_1.Address)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map