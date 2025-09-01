"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionPipe = void 0;
const common_1 = require("@nestjs/common");
class EncryptionPipe extends common_1.ValidationPipe {
    async transform(value, metadata) {
        return super.transform(value, metadata);
    }
}
exports.EncryptionPipe = EncryptionPipe;
//# sourceMappingURL=encrypt.pipe.js.map