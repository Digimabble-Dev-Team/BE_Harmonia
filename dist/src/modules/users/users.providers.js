"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const constants_1 = require("../../core/constants");
const sequelize_typescript_1 = require("sequelize-typescript");
exports.usersProviders = [
    {
        provide: constants_1.SEQUELIZE,
        useValue: sequelize_typescript_1.Sequelize,
    },
];
//# sourceMappingURL=users.providers.js.map