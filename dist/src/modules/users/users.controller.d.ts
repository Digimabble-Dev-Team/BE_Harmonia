import { UsersService } from './users.service';
import { HomeService } from './home.service';
export declare class UsersController {
    private readonly userService;
    private readonly homeService;
    constructor(userService: UsersService, homeService: HomeService);
}
