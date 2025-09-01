"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTherapistDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_therapist_dto_1 = require("./create-therapist.dto");
class UpdateTherapistDto extends (0, swagger_1.PartialType)(create_therapist_dto_1.CreateTherapistDto) {
}
exports.UpdateTherapistDto = UpdateTherapistDto;
//# sourceMappingURL=update-therapist.dto.js.map