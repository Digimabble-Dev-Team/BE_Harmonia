import { TeamMember } from 'src/modules/team-member/entities/team-member.entity';
export default class User {
    id: number;
    email_id: string;
    password: string;
    team_id: string;
    hashPassword(): Promise<void>;
    team: TeamMember;
}
