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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseModel_1 = require("../../../core/database/BaseModel");
const typeorm_1 = require("typeorm");
const property_entity_1 = __importDefault(require("../../properties/entities/property.entity"));
const patient_entity_1 = require("../../customers/entities/patient.entity");
let Order = class Order extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unique: true }),
    __metadata("design:type", Number)
], Order.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", patient_entity_1.Patient)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_entity_1.default, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
    __metadata("design:type", property_entity_1.default)
], Order.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Order.prototype, "purchase_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Order.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Order.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: 'Pending' }),
    __metadata("design:type", String)
], Order.prototype, "amount_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "is_deleted", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)({ name: 'orders' })
], Order);
exports.default = Order;
//# sourceMappingURL=orders.entity.js.map