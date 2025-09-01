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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtils = void 0;
const common_1 = require("@nestjs/common");
const xlsx = __importStar(require("xlsx"));
const html_pdf_1 = __importDefault(require("html-pdf"));
const logger_1 = require("./logger");
let FileUtils = class FileUtils {
    static xlsxToJsonConvertor(file) {
        const workbook = xlsx.read(file.buffer, { type: 'buffer' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = xlsx.utils.sheet_to_json(worksheet);
        return jsonData;
    }
    static async htmlPdfBuffer(html) {
        html_pdf_1.default.create(html).toBuffer((err, buffer) => {
            if (err) {
                console.error(err);
                logger_1.logger.error('PdfGenrateError: ' + JSON.stringify(err));
            }
            else {
                console.log('PDF generated:', buffer);
            }
        });
    }
    static async generatePDF(invoiceContent, pdfFileName) {
    }
};
FileUtils = __decorate([
    (0, common_1.Injectable)()
], FileUtils);
exports.FileUtils = FileUtils;
//# sourceMappingURL=fileUtils.js.map