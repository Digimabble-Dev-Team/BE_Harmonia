"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailUtils = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("./logger");
const nodemailer_1 = __importDefault(require("nodemailer"));
let MailUtils = class MailUtils {
    static async sendEmailVerificationLink(email, verificationUrl) {
        try {
            const transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                auth: {
                    user: 'anandmar883@gmail.com',
                    pass: 'juys mnqs xpxv ysnx',
                },
            });
            const mailOptions = {
                from: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
                to: email,
                subject: 'Verify Your Email Address',
                html: `
        <h2>Welcome!</h2>
        <p>Thank you for signing up. Please verify your email address by clicking the link below:</p>
        <a href="${verificationUrl}">Verify Email</a>
        <p>This link will expire in 10 minutes.</p>
      `,
            };
            await transporter.sendMail(mailOptions);
            logger_1.logger.info(`Verification email sent to: ${email}`);
            return true;
        }
        catch (error) {
            logger_1.logger.error(`Error sending verification email: ${error.message}`);
            throw new Error('Failed to send verification email');
        }
    }
    static async sendOtpEmail(email, otp) {
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'anandmar883@gmail.com',
                pass: 'juys mnqs xpxv ysnx',
            },
        });
        const mailOptions = {
            from: 'anandroyal147@gmail.com',
            to: email,
            subject: 'Verify your email address',
            text: `Your verification code is: ${otp}`,
        };
        await transporter.sendMail(mailOptions);
    }
    static async sendPasswordResetEmail(email, resetUrl) {
        try {
            const transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                auth: {
                    user: 'anandmar883@gmail.com',
                    pass: 'juys mnqs xpxv ysnx',
                },
            });
            const mailOptions = {
                from: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
                to: email,
                subject: 'Password Reset Instructions',
                html: `
          <h1>Reset Your Password</h1>
          <p>You requested a password reset. Please click the link below to reset your password:</p>
          <a href="${resetUrl}">Reset Password</a>
          <p>This link will expire in 30 Minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
        `
            };
            await transporter.sendMail(mailOptions);
            logger_1.logger.info(`Password reset email sent to: ${email}`);
            return true;
        }
        catch (error) {
            logger_1.logger.error(`Error sending password reset email: ${error.message}`);
            throw new Error('Failed to send password reset email');
        }
    }
};
MailUtils = __decorate([
    (0, common_1.Injectable)()
], MailUtils);
exports.MailUtils = MailUtils;
//# sourceMappingURL=mailUtils.js.map