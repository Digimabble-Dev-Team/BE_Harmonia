"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = __importStar(require("jsonwebtoken"));
const logger_1 = require("../core/utils/logger");
let JwtMiddleware = class JwtMiddleware {
    async use(req, res, next) {
        const excludedRoutes = [
            '/api/v1/auth/login',
            '/api/v1/auth/signup-admin',
            '/api/v1/auth/resend-otp',
            '/api/v1/auth/forgot-password',
            '/api/v1/auth/reset-password',
            '/api/v1/auth/refresh',
            '/api/v1/auth/signup',
            '/api/v1/auth/signup-staff',
            '/api/v1/auth/signup-branch-admin',
            '/api/v1/auth/signup-super-admin',
        ];
        if (excludedRoutes.includes(req.baseUrl)) {
            return next();
        }
        if (!req.headers['authorization']) {
            return next();
        }
        const authTokenHeader = req.headers['authorization'].split(' ')[1];
        if (authTokenHeader) {
            try {
                const decodedToken = jwt.verify(authTokenHeader, process.env.JWTKEY);
                console.log(decodedToken, 'authTokenHeader');
                req.user = decodedToken;
            }
            catch (error) {
                logger_1.logger.error('Token_Expiry_Error: ' + JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.stack) || (error === null || error === void 0 ? void 0 : error.name) || error));
                if (error.name === 'TokenExpiredError') {
                    logger_1.logger.error('Token_Expiry_exit: ' + JSON.stringify('Token has expired.'));
                    return res.status(403).json({ code: 401, message: 'Token has expired.' });
                }
                else {
                    logger_1.logger.error('Token_Invalid_exit: ' + JSON.stringify('Token has expired.'));
                    return res.status(401).json({ code: 401, message: 'Invalid token' });
                }
            }
        }
        else {
            logger_1.logger.error('Token_Unauthorized_exit: ' + JSON.stringify('Unauthorized'));
            return res.status(401).json({ code: 401, message: 'Unauthorized' });
        }
        next();
    }
};
JwtMiddleware = __decorate([
    (0, common_1.Injectable)()
], JwtMiddleware);
exports.JwtMiddleware = JwtMiddleware;
//# sourceMappingURL=jwt.middleware.js.map