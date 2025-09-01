"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const appointment_controller_1 = require("./appointment.controller");
const appointment_service_1 = require("./appointment.service");
const appointment_entity_1 = __importDefault(require("./entities/appointment.entity"));
const therapist_entity_1 = require("../therapist/entities/therapist.entity");
const team_member_entity_1 = require("../team-member/entities/team-member.entity");
const patient_entity_1 = require("../customers/entities/patient.entity");
const branch_entity_1 = require("../branches/entities/branch.entity");
let AppointmentsModule = class AppointmentsModule {
};
AppointmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([appointment_entity_1.default, therapist_entity_1.Therapist, patient_entity_1.Patient, team_member_entity_1.TeamMember, branch_entity_1.Branch])],
        controllers: [appointment_controller_1.AppointmentsController],
        providers: [appointment_service_1.AppointmentsService],
        exports: [appointment_service_1.AppointmentsService],
    })
], AppointmentsModule);
exports.AppointmentsModule = AppointmentsModule;
//# sourceMappingURL=appointment.module.js.map