"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
require('dotenv').config();
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, printf, colorize, align, json } = winston_1.default.format;
const constants_1 = require("../constants");
const errorFilter = winston_1.default.format((info, opts) => {
    return info.level === 'error' ? info : false;
});
const infoFilter = winston_1.default.format((info, opts) => {
    return info.level === 'info' ? info : false;
});
exports.logger = winston_1.default.createLogger({});
if (process.env.NODE_ENV != constants_1.PRODUCTION) {
    exports.logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
//# sourceMappingURL=logger.js.map