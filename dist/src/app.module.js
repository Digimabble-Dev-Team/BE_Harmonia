"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const config_1 = require("@nestjs/config");
const nestjs_schedule_1 = require("nestjs-schedule");
const platform_express_1 = require("@nestjs/platform-express");
const typeorm_1 = require("@nestjs/typeorm");
const config_2 = require("./config");
const jwt_middleware_1 = require("./middleware/jwt.middleware");
const dotenv_1 = require("dotenv");
const addresses_module_1 = require("./modules/addresses/addresses.module");
const properties_module_1 = require("./modules/properties/properties.module");
const patient_module_1 = require("./modules/customers/patient.module");
const orders_module_1 = require("./modules/orders/orders.module");
const menus_module_1 = require("./modules/menus/menus.module");
const roles_module_1 = require("./modules/roles/roles.module");
const permissions_module_1 = require("./modules/permissions/permissions.module");
const leads_module_1 = require("./modules/leads/leads.module");
const location_module_1 = require("./modules/location/location.module");
const social_links_entity_1 = require("./modules/social-links/entities/social-links.entity");
const therapists_module_1 = require("./modules/therapist/therapists.module");
const seeder_module_1 = require("./seeds/seeder.module");
const token_module_1 = require("./modules/users/token.module");
const team_member_module_1 = require("./modules/team-member/team-member.module");
const appointment_module_1 = require("./modules/appointment/appointment.module");
const calendars_module_1 = require("./modules/calendars/calendars.module");
const specialization_module_1 = require("./modules/specialization/specialization.module");
const branches_module_1 = require("./modules/branches/branches.module");
const profile_module_1 = require("./modules/profile/profile.module");
const departments_module_1 = require("./modules/Department/departments.module");
(0, dotenv_1.config)();
console.log('env--->', config_2.DBconfig.host, config_2.DBconfig.port, config_2.DBconfig.username, config_2.DBconfig.password, config_2.DBconfig.database);
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(jwt_middleware_1.JwtMiddleware)
            .forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: config_2.DBconfig.host,
                port: config_2.DBconfig.port,
                username: config_2.DBconfig.username,
                password: config_2.DBconfig.password,
                database: config_2.DBconfig.database,
                entities: [`${__dirname}../../**/**.entity{.ts,.js}`],
                synchronize: false,
                logging: true,
                ssl: { rejectUnauthorized: false },
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            nestjs_schedule_1.ScheduleModule.forRoot(),
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            addresses_module_1.AddressesModule,
            properties_module_1.PropertiesModule,
            patient_module_1.PatientsModule,
            orders_module_1.OrdersModule,
            menus_module_1.MenusModule,
            permissions_module_1.PermissionsModule,
            roles_module_1.RolesModule,
            leads_module_1.LeadsModule,
            location_module_1.LocationModule,
            social_links_entity_1.SocialLinks,
            therapists_module_1.TherapistsModule,
            seeder_module_1.SeederModule,
            token_module_1.TokenModule,
            team_member_module_1.TeamMemberModule,
            appointment_module_1.AppointmentsModule,
            calendars_module_1.CalendarsModule,
            specialization_module_1.SpecializationModule,
            branches_module_1.BranchesModule,
            profile_module_1.ProfileModule,
            departments_module_1.DepartmentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map