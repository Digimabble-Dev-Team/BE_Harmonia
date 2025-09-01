"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeamMemberDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateTeamMemberDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Doe', description: 'Last name of the team member' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'John', description: 'First name of the team member' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'John Doe', description: 'Full name of the team member' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Psychologist', description: 'Primary job title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "job_1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Teenagers and adults', description: 'Target audience' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "specific_audience", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Cognitive Behavioral Therapy', description: 'First specialization' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "specialization_1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Therapist', description: 'Secondary job title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "job_2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Researcher', description: 'Tertiary job title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "job_3", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Lecturer', description: 'Quaternary job title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "job_4", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Passionate about mental health awareness.', description: 'Personal statement' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "who_am_i", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Individual, couples, and group therapy', description: 'Types of consultations' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "consultations", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '123 Main Street, London', description: 'Office address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "office_address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'john.doe@example.com', description: 'Contact email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "contact_email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '+44 1234 567890', description: 'Contact phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "contact_phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: { monday: '9am-5pm', tuesday: '10am-4pm' },
        description: 'Weekly availability schedule',
        type: Object,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateTeamMemberDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Experienced therapist with 10+ years in practice.', description: 'About section' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "about", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['English', 'French'],
        description: 'Languages spoken by the team member',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTeamMemberDto.prototype, "languages_spoken", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['Cash', 'Credit Card', 'Bank Transfer'],
        description: 'Accepted payment methods',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTeamMemberDto.prototype, "payment_methods", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['PhD in Psychology', 'Certified CBT Therapist'],
        description: 'Diplomas and training',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTeamMemberDto.prototype, "diplomas_and_training", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['Anxiety', 'Depression', 'Stress Management'],
        description: 'Specializations',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTeamMemberDto.prototype, "specializations", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://www.johndoeclinic.com', description: 'Website link' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: { 'What is your approach?': 'I focus on CBT methods' },
        description: 'Frequently asked questions',
        type: Object,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateTeamMemberDto.prototype, "frequently_asked_questions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: ['https://calendly.com/johndoe'],
        description: 'Calendar booking links',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateTeamMemberDto.prototype, "calendar_links", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://example.com/profile-photo.jpg',
        description: 'Profile photo URL',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamMemberDto.prototype, "photo", void 0);
exports.CreateTeamMemberDto = CreateTeamMemberDto;
//# sourceMappingURL=create-team-member.dto.js.map