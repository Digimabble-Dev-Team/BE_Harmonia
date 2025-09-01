"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const logger_1 = require("./logger");
let ResponseLoggingInterceptor = class ResponseLoggingInterceptor {
    intercept(context, next) {
        const now = Date.now();
        return next.handle().pipe((0, operators_1.tap)(() => {
            var _a, _b;
            const request = context === null || context === void 0 ? void 0 : context.switchToHttp().getRequest();
            const response = context === null || context === void 0 ? void 0 : context.switchToHttp().getResponse();
            const responseTime = Date.now() - now;
            const clientIP = (request === null || request === void 0 ? void 0 : request.headers['x-forwarded-for']) || ((_a = request === null || request === void 0 ? void 0 : request.connection) === null || _a === void 0 ? void 0 : _a.remoteAddress);
            const deviceName = (_b = request === null || request === void 0 ? void 0 : request.device) === null || _b === void 0 ? void 0 : _b.type;
            logger_1.logger.info(`Entry of API-->Request: ${request === null || request === void 0 ? void 0 : request.method},  URL: ${request === null || request === void 0 ? void 0 : request.originalUrl},  Device_OS: ${request === null || request === void 0 ? void 0 : request.rawHeaders[13]},  Client_IP: ${clientIP},  Device_Type: ${deviceName}`);
            logger_1.logger.info(`Exit of API--> Response: ${request === null || request === void 0 ? void 0 : request.method},   URL: ${request === null || request === void 0 ? void 0 : request.url},  Status: ${response === null || response === void 0 ? void 0 : response.statusCode},  Response_Time: ${responseTime}ms`);
        }));
    }
};
ResponseLoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseLoggingInterceptor);
exports.ResponseLoggingInterceptor = ResponseLoggingInterceptor;
//# sourceMappingURL=ResponseLoggingInterceptor.js.map