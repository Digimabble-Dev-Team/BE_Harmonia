"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let logo = "";
class EmailTemService {
    static logo() {
        return `<div class="text-center" style=" text-align: center;">
    <img src="${logo}" alt="" style=" width: 40%;margin-top: 15px;" alt="savefood">
</div>`;
    }
    static emailOtpVerification(otp) {
        return "html";
    }
    static emailPasswordVerification(password) {
    }
    static forgotPassword(token) {
    }
}
exports.default = EmailTemService;
//# sourceMappingURL=emailTemplate.js.map