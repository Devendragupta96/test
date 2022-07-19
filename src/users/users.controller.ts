import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './users.model';
import { UserService } from './users.service';



@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UserService
    ) { }


    @Get()
    getUsers(): Promise<any> {
        const result = this.usersService.getFromUserService();
        return result

    }

    @Post('')
    async saveUser(@Body() user: User): Promise<{ success: boolean, payload: User }> {
        const result = await this.usersService.saveUser(user);
        return {
            success: true,
            payload: result,
        }
    }


}

