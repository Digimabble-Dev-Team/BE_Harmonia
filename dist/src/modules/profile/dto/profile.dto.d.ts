import User from 'src/modules/users/entities/user.entity';
import { TeamMember } from 'src/modules/team-member/entities/team-member.entity';
export declare class ProfileDto {
    constructor(user: User, team: TeamMember);
    user: User;
    team: TeamMember;
}
