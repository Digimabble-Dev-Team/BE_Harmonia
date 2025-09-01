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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("../swagger");
const common_1 = require("@nestjs/common");
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const constants_1 = require("./core/constants");
const path_1 = require("path");
const express_rate_limit_1 = require("express-rate-limit");
const ResponseLoggingInterceptor_1 = require("./core/utils/ResponseLoggingInterceptor");
const express_device_1 = __importDefault(require("express-device"));
const logger_1 = require("./core/utils/logger");
const bodyParser = __importStar(require("body-parser"));
const customValidation_1 = require("./core/utils/customValidation");
const globalErrorHandler_1 = require("./core/utils/globalErrorHandler");
const encryption_util_1 = require("./core/utils/encryption.util");
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 1 * 60 * 1000,
    max: 100,
    message: 'Hold on their, maybe get a life instead of spamming my api.',
    standardHeaders: true,
    legacyHeaders: true,
    skipFailedRequests: true,
    validate: { xForwardedForHeader: false },
});
const corsOption = Object.freeze({
    origin: "*",
    methods: constants_1.ALLOWED_METHODS,
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
});
async function bootstrap() {
    require('dotenv').config();
    console.log(' JWTKEY Loaded:', process.env.JWTKEY);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((req, res, next) => {
        var _a, _b;
        if (req.method !== 'GET' && ((_a = req.headers['content-type']) === null || _a === void 0 ? void 0 : _a.includes('application/json')) && ((_b = req.body) === null || _b === void 0 ? void 0 : _b.data)) {
            try {
                const decrypted = encryption_util_1.AES.decrypt(req.body.data);
                req.body = JSON.parse(decrypted);
            }
            catch (error) {
                console.error('AES decryption failed:', error.message);
                return res.status(400).json({ message: 'Invalid encrypted request body' });
            }
        }
        next();
    });
    app.enableCors(corsOption);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.getHttpAdapter().getInstance().set('trust proxy', false);
    app.use((0, helmet_1.default)());
    app.use(helmet_1.default.xssFilter());
    app.use(helmet_1.default.hidePoweredBy());
    app.use(helmet_1.default.frameguard({ action: 'deny' }));
    app.use(helmet_1.default.ieNoOpen());
    app.use(bodyParser.json({ limit: '100mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
    app.use(helmet_1.default.noSniff());
    app.use((0, cookie_parser_1.default)());
    const expressApp = app.getHttpAdapter().getInstance();
    expressApp.disable('x-powered-by');
    expressApp.set('etag', 'strong');
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '..', 'public'), {
        prefix: '/public/',
    });
    app.setGlobalPrefix('api/v1');
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'pdfs'));
    (0, swagger_1.setupSwagger)(app, 'user');
    app.use(limiter);
    app.useGlobalFilters(new globalErrorHandler_1.GlobalErrorHandler());
    app.use(express_device_1.default.capture());
    app.useGlobalFilters(new customValidation_1.GlobalExceptionFilter());
    app.useGlobalInterceptors(new ResponseLoggingInterceptor_1.ResponseLoggingInterceptor());
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    await app.listen(Number(process.env.USER_PORT || 8080));
    app.use((req, res, next) => {
        console.log(`[Incoming Request] ${req.method} ${req.originalUrl}`);
        next();
    });
    process.on('uncaughtException', (error) => {
        console.error('Uncaught Exception:', error === null || error === void 0 ? void 0 : error.message);
        logger_1.logger.error('Uncaught Exception: ' + JSON.stringify((error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.stack) || error));
    });
    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
        logger_1.logger.error('Unhandled Rejection at: ' + JSON.stringify(promise) + '_reason:' + JSON.stringify(reason));
    });
}
bootstrap();
//# sourceMappingURL=main.js.map