export declare class DateUtils {
    static userTimeZone: string;
    static formatDate(date: any): string;
    static convertTo24HourFormat(time: any): string;
    static isBetweenSlotTimes(start_time: string, end_time: string, current_time: Date): boolean;
    static findDiffInHrs(start_date: Date, end_date: Date): number;
    static findDiffInWeek(start_date: Date, end_date: Date): number;
    static addHours(date: Date, hours: number): Date;
    isTimestampInThePast(givenTimestamp: Date): Promise<boolean>;
    static convertToGMT(inputDateString: string): string;
    static convertToUTC(timeString: string): string;
    static convertFromUTC(timeString: string): string;
}
