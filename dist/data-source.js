"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const config_1 = require("./src/config");
const patient_entity_1 = require("./src/modules/customers/entities/patient.entity");
const address_entity_1 = require("./src/modules/addresses/entities/address.entity");
const therapist_entity_1 = require("./src/modules/therapist/entities/therapist.entity");
const role_entity_1 = require("./src/modules/roles/entities/role.entity");
const permission_entity_1 = require("./src/modules/permissions/entities/permission.entity");
const menu_entity_1 = require("./src/modules/menus/entities/menu.entity");
const branch_entity_1 = require("./src/modules/branches/entities/branch.entity");
const token_entity_1 = require("./src/modules/users/entities/token.entity");
const team_member_entity_1 = require("./src/modules/team-member/entities/team-member.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: config_1.DBconfig.host,
    port: config_1.DBconfig.port,
    username: config_1.DBconfig.username,
    password: config_1.DBconfig.password,
    database: config_1.DBconfig.database,
    entities: [
        patient_entity_1.Patient,
        address_entity_1.Address,
        therapist_entity_1.Therapist,
        role_entity_1.Role,
        permission_entity_1.Permission,
        menu_entity_1.Menu,
        branch_entity_1.Branch,
        token_entity_1.Token,
        team_member_entity_1.TeamMember,
    ],
    migrations: ['src/migrations/*{.ts,.js}'],
    synchronize: false,
    logging: true,
    ssl: config_1.DBconfig.ssl,
});
//# sourceMappingURL=data-source.js.map