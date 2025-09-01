import { TeamMemberService } from './team-member.service';
import { TeamMember } from './entities/team-member.entity';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
export declare class TeamMemberController {
    private readonly service;
    constructor(service: TeamMemberService);
    findAll(): Promise<TeamMember[]>;
    findOne(id: string): Promise<TeamMember>;
    create(data: CreateTeamMemberDto): Promise<TeamMember>;
    update(id: string, data: UpdateTeamMemberDto): Promise<TeamMember>;
    search(q: string): Promise<TeamMember[]>;
    remove(id: string): Promise<void>;
    restore(id: string): Promise<TeamMember>;
}
