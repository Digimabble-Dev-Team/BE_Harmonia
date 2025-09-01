"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const logger_1 = require("./logger");
class HandleResponse {
    constructor(options) {
        if (options != null && options != undefined) {
            const keys = Object.keys(options);
            keys.forEach((key) => {
                this.res[key] = options[key];
            });
        }
        return this.res;
    }
    static success(res, code, status, message, data) {
        if (code === 500) {
            this.serverError(res, message, data);
            return;
        }
        res.status(200).json({
            code: code,
            status: status,
            message: message || 'success',
            data: data,
        });
    }
    static serverError(res, message, data) {
        res.status(500).json({
            code: 500,
            status: constants_1.E0,
            message: message || 'internal server error',
            error: data,
        });
    }
    static buildSuccessObj(code, message, data) {
        const res = {
            statusCode: code,
            status: true,
            message: message,
            data: data || {},
        };
        return res;
    }
    static buildErrObj(code, message, error) {
        var _a;
        console.error('error===>' + error);
        logger_1.logger.error(`Name:${error === null || error === void 0 ? void 0 : error.name} -> Message: ${error === null || error === void 0 ? void 0 : error.message} -> Json: ${JSON.stringify((error === null || error === void 0 ? void 0 : error.stack) || (error === null || error === void 0 ? void 0 : error.message) || error)}`);
        code = code !== null && code !== void 0 ? code : 500;
        if ((error === null || error === void 0 ? void 0 : error.name) === 'SequelizeValidationError' ||
            (error === null || error === void 0 ? void 0 : error.name) === 'SequelizeUniqueConstraintError' ||
            (error === null || error === void 0 ? void 0 : error.name) === 'SequelizeForeignKeyConstraintError') {
            return {
                statusCode: code || 500,
                status: constants_1.E0,
                message: (error === null || error === void 0 ? void 0 : error.message) || ((_a = error === null || error === void 0 ? void 0 : error.errors[0]) === null || _a === void 0 ? void 0 : _a.message) || message || 'internal server error',
                error: (error === null || error === void 0 ? void 0 : error.message) || error,
            };
        }
        else {
            return {
                code: code || 500,
                status: constants_1.E0,
                message: (error === null || error === void 0 ? void 0 : error.message) || message || constants_1.EM100,
                error: (error === null || error === void 0 ? void 0 : error.message) || error,
            };
        }
    }
}
exports.default = HandleResponse;
//# sourceMappingURL=handle_response.js.map