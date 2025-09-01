"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorpayPaymentStatus = exports.PaygPaymentStatus = exports.FreelancerBookingSlots = exports.FreelancerSlot = exports.Day = void 0;
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
    Day[Day["THURSDAY"] = 3] = "THURSDAY";
    Day[Day["FRIDAY"] = 4] = "FRIDAY";
    Day[Day["SATURDAY"] = 5] = "SATURDAY";
    Day[Day["SUNDAY"] = 6] = "SUNDAY";
})(Day = exports.Day || (exports.Day = {}));
var FreelancerSlot;
(function (FreelancerSlot) {
    FreelancerSlot[FreelancerSlot["MORNING"] = 1] = "MORNING";
    FreelancerSlot[FreelancerSlot["AFTERNOON"] = 2] = "AFTERNOON";
    FreelancerSlot[FreelancerSlot["EVENING"] = 3] = "EVENING";
})(FreelancerSlot = exports.FreelancerSlot || (exports.FreelancerSlot = {}));
exports.FreelancerBookingSlots = ['Morning', 'AfterNoon', 'Evening'];
var PaygPaymentStatus;
(function (PaygPaymentStatus) {
    PaygPaymentStatus[PaygPaymentStatus["created"] = 0] = "created";
    PaygPaymentStatus[PaygPaymentStatus["paid"] = 1] = "paid";
    PaygPaymentStatus[PaygPaymentStatus["unpaid"] = 2] = "unpaid";
    PaygPaymentStatus[PaygPaymentStatus["partial"] = 3] = "partial";
    PaygPaymentStatus[PaygPaymentStatus["pending"] = 4] = "pending";
    PaygPaymentStatus[PaygPaymentStatus["cancelled_by_user"] = 5] = "cancelled_by_user";
    PaygPaymentStatus[PaygPaymentStatus["cancelled_by_merchant"] = 6] = "cancelled_by_merchant";
    PaygPaymentStatus[PaygPaymentStatus["expired"] = 7] = "expired";
})(PaygPaymentStatus = exports.PaygPaymentStatus || (exports.PaygPaymentStatus = {}));
exports.RazorpayPaymentStatus = {
    CAPTURED: 'captured',
    FAILED: 'failed'
};
//# sourceMappingURL=enum.js.map