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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const logger_1 = require("../../core/utils/logger");
const constants_1 = require("../../core/constants");
const calendar_entity_1 = require("./entities/calendar.entity");
let CalendarsService = class CalendarsService {
    constructor(calendarRepository) {
        this.calendarRepository = calendarRepository;
    }
    handleError(operation, error) {
        logger_1.logger.error(`Calendar_${operation}_Error: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || error)}`);
        if (error instanceof common_1.HttpException)
            throw error;
        throw new common_1.HttpException(constants_1.EM100, constants_1.EC500);
    }
    async findAllWithPagination(page, limit, search) {
        try {
            logger_1.logger.info(`Calendar_FindAllPaginated_Entry: page=${page}, limit=${limit}, search=${search}`);
            const query = this.calendarRepository.createQueryBuilder('c');
            if (search === null || search === void 0 ? void 0 : search.trim()) {
                const searchTerm = `%${search.trim()}%`;
                query.where(new typeorm_2.Brackets((qb) => {
                    qb.where('c.label ILIKE :search', { search: searchTerm })
                        .orWhere('c.siteid ILIKE :search', { search: searchTerm })
                        .orWhere('c.ownerid ILIKE :search', { search: searchTerm });
                }));
            }
            const [data, total] = await query
                .orderBy('c.id', 'ASC')
                .skip((page - 1) * limit)
                .take(limit)
                .getManyAndCount();
            logger_1.logger.info(`Calendar_FindAllPaginated_Exit: Found ${data.length} calendars, total: ${total}`);
            return { data, total };
        }
        catch (error) {
            this.handleError('FindAllPaginated', error);
        }
    }
};
CalendarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(calendar_entity_1.Calendar)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CalendarsService);
exports.CalendarsService = CalendarsService;
//# sourceMappingURL=calendars.service.js.map