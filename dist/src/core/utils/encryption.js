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
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const bcrypt = __importStar(require("bcrypt"));
const logger_1 = require("./logger");
class Encryption {
    static hashPassword(password) {
        const hash = bcrypt.hashSync(password, 8);
        return hash;
    }
    static comparePassword(enteredPassword, dbPassword) {
        const match = bcrypt.compareSync(enteredPassword, dbPassword);
        return match;
    }
    static generateRawToken() {
        return crypto.randomBytes(32).toString('hex');
    }
    static hashToken(raw) {
        return crypto.createHash('sha256').update(raw).digest('hex');
    }
}
exports.default = Encryption;
Encryption.encryptValue = (input_data) => {
    try {
        let cipher = crypto.createCipheriv(process.env.ECY_ALGO, process.env.ECY_KEY, process.env.ECY_IV);
        let encrypted = cipher.update(input_data, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }
    catch (error) {
        logger_1.logger.error('EncryptValue_Error_:' + JSON.stringify((error === null || error === void 0 ? void 0 : error.stack) || (error === null || error === void 0 ? void 0 : error.message) || error));
        throw new Error(error);
    }
};
Encryption.decryptValue = (input_data) => {
    try {
        let decrypted = null;
        if (input_data) {
            let decipher = crypto.createDecipheriv(process.env.ECY_ALGO, process.env.ECY_KEY, process.env.ECY_IV);
            decrypted = decipher.update(input_data, 'base64', 'utf8');
            decrypted = decrypted + decipher.final('utf8');
        }
        return decrypted;
    }
    catch (error) {
        logger_1.logger.error('DecryptValue_Error_:' + JSON.stringify((error === null || error === void 0 ? void 0 : error.stack) || (error === null || error === void 0 ? void 0 : error.message) || error));
        throw new Error(error);
    }
};
//# sourceMappingURL=encryption.js.map