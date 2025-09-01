"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionDescriptionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const function_description_controller_1 = require("./function-description.controller");
const function_description_service_1 = require("./function-description.service");
const function_description_entity_1 = require("./entities/function-description.entity");
const therapist_entity_1 = require("../therapist/entities/therapist.entity");
let FunctionDescriptionModule = class FunctionDescriptionModule {
};
FunctionDescriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([function_description_entity_1.FunctionDescription, therapist_entity_1.Therapist])],
        controllers: [function_description_controller_1.FunctionDescriptionController],
        providers: [function_description_service_1.FunctionDescriptionService],
        exports: [function_description_service_1.FunctionDescriptionService],
    })
], FunctionDescriptionModule);
exports.FunctionDescriptionModule = FunctionDescriptionModule;
//# sourceMappingURL=function-description.module.js.map