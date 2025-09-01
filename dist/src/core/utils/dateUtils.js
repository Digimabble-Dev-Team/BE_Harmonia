"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
const moment_1 = __importDefault(require("moment"));
const logger_1 = require("./logger");
const luxon_1 = require("luxon");
class DateUtils {
    static formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(2);
        return `${day}-${month}-${year}`;
    }
    static convertTo24HourFormat(time) {
        const [hour, minute] = time.split(':');
        const isPM = time.slice(-2) === 'PM' || time.slice(-2) === 'pm';
        let hour24 = parseInt(hour, 10);
        if (isPM && hour24 < 12) {
            hour24 += 12;
        }
        else if (!isPM && hour24 === 12) {
            hour24 = 0;
        }
        return `${hour24.toString().padStart(2, '0')}:${minute}`;
    }
    static isBetweenSlotTimes(start_time, end_time, current_time) {
        const options = {
            hour12: false,
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
        };
        if (!start_time && !end_time)
            return false;
        let appointmentTime = current_time.toLocaleString('en-IN', options);
        const startTime24 = this.convertTo24HourFormat(start_time);
        let endTime24 = this.convertTo24HourFormat(end_time);
        if ((startTime24 === null || startTime24 === void 0 ? void 0 : startTime24.split(' ')[0]) == '23:00' && (endTime24 === null || endTime24 === void 0 ? void 0 : endTime24.split(' ')[0]) == '00:00') {
            console.log(endTime24);
            endTime24 = '24:00 PM';
        }
        const isBetweenSlotTimes = (startTime24 === null || startTime24 === void 0 ? void 0 : startTime24.split(' ')[0]) <= appointmentTime && appointmentTime < (endTime24 === null || endTime24 === void 0 ? void 0 : endTime24.split(' ')[0]);
        return isBetweenSlotTimes;
    }
    static findDiffInHrs(start_date, end_date) {
        let mom_start_time = (0, moment_1.default)(start_date, 'HH:mm a');
        let mom_end_time = (0, moment_1.default)(end_date, 'HH:mm a');
        let diff = moment_1.default.duration(mom_start_time.diff(mom_end_time));
        return diff.asHours();
    }
    static findDiffInWeek(start_date, end_date) {
        let mom_start_time = (0, moment_1.default)(start_date, 'HH:mm a');
        let mom_end_time = (0, moment_1.default)(end_date, 'HH:mm a');
        let diff = moment_1.default.duration(mom_start_time.diff(mom_end_time));
        return diff.asWeeks();
    }
    static addHours(date, hours) {
        let m_date = (0, moment_1.default)(date);
        let final_date = (0, moment_1.default)(m_date).add(hours, 'hours');
        return new Date(final_date.toISOString());
    }
    async isTimestampInThePast(givenTimestamp) {
        const givenDate = new Date(givenTimestamp);
        const currentDate = new Date();
        logger_1.logger.info('check_appointment_time_is_past: ' + JSON.stringify(givenDate < currentDate));
        return givenDate < currentDate;
    }
    static convertToGMT(inputDateString) {
        const inputDate = new Date(inputDateString);
        const year = inputDate.getUTCFullYear();
        const month = `0${inputDate.getUTCMonth() + 1}`.slice(-2);
        const day = `0${inputDate.getUTCDate()}`.slice(-2);
        const hours = `0${inputDate.getUTCHours()}`.slice(-2);
        const minutes = `0${inputDate.getUTCMinutes()}`.slice(-2);
        const seconds = `0${inputDate.getUTCSeconds()}`.slice(-2);
        const gmtDateString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
        return gmtDateString;
    }
    static convertToUTC(timeString) {
        return luxon_1.DateTime.fromFormat(timeString, 'HH:mm', { zone: this.userTimeZone }).setZone('UTC').toFormat('HH:mm');
    }
    static convertFromUTC(timeString) {
        return luxon_1.DateTime.fromFormat(timeString, 'HH:mm:ss', { zone: 'UTC' }).setZone(this.userTimeZone).toFormat('HH:mm:ss');
    }
}
exports.DateUtils = DateUtils;
DateUtils.userTimeZone = 'Asia/Kolkata';
//# sourceMappingURL=dateUtils.js.map