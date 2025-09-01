export declare enum Day {
    MONDAY = 0,
    TUESDAY = 1,
    WEDNESDAY = 2,
    THURSDAY = 3,
    FRIDAY = 4,
    SATURDAY = 5,
    SUNDAY = 6
}
export declare enum FreelancerSlot {
    MORNING = 1,
    AFTERNOON = 2,
    EVENING = 3
}
export declare const FreelancerBookingSlots: string[];
export declare enum PaygPaymentStatus {
    'created' = 0,
    'paid' = 1,
    'unpaid' = 2,
    'partial' = 3,
    'pending' = 4,
    'cancelled_by_user' = 5,
    'cancelled_by_merchant' = 6,
    'expired' = 7
}
export declare const RazorpayPaymentStatus: {
    CAPTURED: string;
    FAILED: string;
};
