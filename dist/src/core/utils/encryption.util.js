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
exports.AES = void 0;
const CryptoJS = __importStar(require("crypto-js"));
const SECRET_KEY = process.env.AES_SECRET_KEY;
exports.AES = {
    encrypt: (data) => {
        const json = typeof data === 'string' ? JSON.stringify(data) : JSON.stringify(data);
        return CryptoJS.AES.encrypt(json, SECRET_KEY).toString();
    },
    decrypt: (cipherText) => {
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedText) {
            throw new Error('Decryption failed — possibly due to wrong key or malformed ciphertext');
        }
        try {
            return JSON.parse(decryptedText);
        }
        catch (_a) {
            return decryptedText;
        }
    }
};
//# sourceMappingURL=encryption.util.js.map