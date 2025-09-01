"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBconfig = exports.databaseConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.databaseConfig = Object.freeze({
    local: {
        username: process.env.DB_USER_LOCAL,
        password: process.env.DB_PASSWORD_LOCAL,
        database: process.env.DB_NAME_LOCAL,
        host: process.env.DB_HOST_LOCAL,
        port: process.env.DB_PORT_LOCAL,
        dialect: process.env.DB_DIALECT_LOCAL,
        frontEndBaseUrl: process.env.FRONTEND_FORGET_URL_LOCAL,
        ssl: false,
    },
    development: {
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASSWORD_DEV,
        database: process.env.DB_NAME_DEV,
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_PORT_DEV,
        dialect: process.env.DB_DIALECT_DEV,
        frontEndBaseUrl: process.env.FRONTEND_FORGET_URL_DEV
    },
    staging: {
        username: process.env.DB_USER_STAGING,
        password: process.env.DB_PASSWORD_STAGING,
        database: process.env.DB_NAME_STAGING,
        host: process.env.DB_HOST_STAGING,
        port: process.env.DB_PORT_STAGING,
        dialect: process.env.DB_DIALECT_STAGING,
        frontEndBaseUrl: process.env.FRONTEND_FORGET_URL_STAGING
    },
    production: {
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASSWORD_DEV,
        database: process.env.DB_NAME_DEV,
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_PORT_DEV,
        dialect: process.env.DB_DIALECT_DEV,
        frontEndBaseUrl: process.env.FRONTEND_FORGET_URL_DEV,
        ssl: { rejectUnauthorized: false },
    }
});
const env = process.env.NODE_ENV && exports.databaseConfig[process.env.NODE_ENV]
    ? process.env.NODE_ENV
    : 'development';
console.log('Current Environment:', env);
if (!exports.databaseConfig[env].password) {
    throw new Error(`❌ Missing DB password for environment: ${env}`);
}
exports.DBconfig = exports.databaseConfig[env];
//# sourceMappingURL=config.js.map