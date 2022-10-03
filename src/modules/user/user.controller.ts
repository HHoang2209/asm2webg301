/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { AuthService } from '../auth/auth.service';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get('')
    async findAll(): Promise<User[] | undefined> {
        return this.userService.findAll();
    }

    @Get('/:id')
    async findOneById(@Param('id') id: string): Promise<User | undefined> {
        return this.userService.findOneById(id);
    }
}
