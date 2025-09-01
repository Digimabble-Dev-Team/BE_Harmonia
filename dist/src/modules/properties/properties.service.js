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
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../../base.service");
const property_entity_1 = __importDefault(require("./entities/property.entity"));
const logger_1 = require("../../core/utils/logger");
const constants_1 = require("../../core/constants");
const error_enums_1 = require("../../core/constants/error_enums");
let PropertiesService = class PropertiesService extends base_service_1.BaseService {
    constructor(propertyRepository) {
        super(propertyRepository.manager);
        this.propertyRepository = propertyRepository;
        this.repository = propertyRepository;
    }
    async createProperty(createPropertyDto) {
        try {
            logger_1.logger.info(`Property_Create_Entry: ${JSON.stringify(createPropertyDto)}`);
            const property = await super.create(createPropertyDto);
            logger_1.logger.info(`Property_Create_Exit: ${JSON.stringify(property)}`);
            return property;
        }
        catch (error) {
            logger_1.logger.error(`Property_Create_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findAllProperties(options) {
        try {
            logger_1.logger.info('Property_FindAll_Entry');
            const properties = await super.findAll(options);
            logger_1.logger.info(`Property_FindAll_Exit: Found ${properties.length} properties`);
            return properties;
        }
        catch (error) {
            logger_1.logger.error(`Property_FindAll_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async findOneProperty(id, options) {
        try {
            logger_1.logger.info(`Property_FindOne_Entry: id=${id}`);
            const property = await super.findOne(id, options);
            if (!property) {
                logger_1.logger.error(`Property_FindOne_Error: No record found for ID ${id}`);
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            logger_1.logger.info(`Property_FindOne_Exit: ${JSON.stringify(property)}`);
            return property;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            logger_1.logger.error(`Property_FindOne_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async updateProperty(id, updatePropertyDto) {
        try {
            logger_1.logger.info(`Property_Update_Entry: id=${id}, data=${JSON.stringify(updatePropertyDto)}`);
            const existingProperty = await this.findOne(id);
            if (!existingProperty) {
                logger_1.logger.error(`Property_Update_Error: No record found for ID ${id}`);
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            const result = await super.update(id, updatePropertyDto);
            if (result.affected === 0) {
                logger_1.logger.error(`Property_Update_Error: No record updated for ID ${id}`);
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            logger_1.logger.info(`Property_Update_Exit: ${JSON.stringify(result)}`);
            return result;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            logger_1.logger.error(`Property_Update_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async removeProperty(id) {
        try {
            logger_1.logger.info(`Property_Remove_Entry: id=${id}`);
            const existingProperty = await this.findOne(id);
            if (!existingProperty) {
                logger_1.logger.error(`Property_Remove_Error: No record found for ID ${id}`);
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            const result = await super.remove(id);
            if (result.affected === 0) {
                logger_1.logger.error(`Property_Remove_Error: No record removed for ID ${id}`);
                throw new common_1.HttpException(constants_1.EM119, constants_1.EC404);
            }
            logger_1.logger.info(`Property_Remove_Exit: ${JSON.stringify(result)}`);
            return result;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            logger_1.logger.error(`Property_Remove_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
    async destroyProperty(id) {
        try {
            logger_1.logger.info(`Property_Destroy_Entry: id=${id}`);
            const result = await this.repository.delete(id);
            if (result.affected === 0) {
                logger_1.logger.error(`Property_Destroy_Error: No record found for ID ${id}`);
                throw new common_1.HttpException(error_enums_1.Errors.NO_RECORD_FOUND, constants_1.EC404);
            }
            logger_1.logger.info('Property_Destroy_Exit: Successfully deleted');
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            logger_1.logger.error(`Property_Destroy_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
            throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
        }
    }
};
PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(property_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PropertiesService);
exports.PropertiesService = PropertiesService;
//# sourceMappingURL=properties.service.js.map