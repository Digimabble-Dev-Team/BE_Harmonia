import { Repository } from 'typeorm';
import { TeamMember } from './entities/team-member.entity';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
export declare class TeamMemberService {
    private repo;
    constructor(repo: Repository<TeamMember>);
    findAll(): Promise<TeamMember[]>;
    findOne(id: string): Promise<TeamMember>;
    create(data: CreateTeamMemberDto): Promise<TeamMember>;
    update(id: string, data: UpdateTeamMemberDto): Promise<TeamMember>;
    search(query: string): Promise<TeamMember[]>;
    remove(id: string): Promise<void>;
    restore(id: string): Promise<TeamMember>;
}
