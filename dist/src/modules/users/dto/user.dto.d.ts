declare enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    OTHERS = "Others"
}
export declare class UpdateUserDto {
    id: number;
    name: string;
    email_id: string;
    mobile_no: string;
    email_verified: boolean;
    dob: Date | null;
    profile_url: string;
    password: string;
    device_token: string;
    preferences: string[];
    gender: Gender;
    is_active?: boolean;
}
export declare class GetBranchAndServiceSearch {
    search_text: string;
}
export {};
