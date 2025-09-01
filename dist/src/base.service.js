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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BaseService = class BaseService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async create(data) {
        const entity = this.repository.create(data);
        return this.repository.save(entity);
    }
    async bulkCreate(data) {
        const entities = this.repository.create(data);
        return this.repository.save(entities);
    }
    async findAll(options) {
        return this.repository.find(options);
    }
    async findAllWithPagination(page, limit, options) {
        let [data, total] = await this.repository.findAndCount(Object.assign(Object.assign({}, options), { skip: (page - 1) * limit, take: limit }));
        return { data, total };
    }
    async findAndCountAll(options) {
        return this.repository.findAndCount(options);
    }
    async findOne(id, options) {
        if (id) {
            return this.repository.findOne(Object.assign({ where: { id, is_deleted: false } }, options));
        }
        return this.repository.findOne(options);
    }
    async update(id, data) {
        return this.repository.update(id, data);
    }
    async remove(id) {
        return this.update(id, { is_deleted: true });
    }
    async destroy(id) {
        await this.repository.delete(id);
    }
    async count(options) {
        return this.repository.count(options);
    }
};
BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map