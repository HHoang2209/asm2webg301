/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authCredentialsDto } from './dtos/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('register')
    async signup(@Body() Body: authCredentialsDto): Promise<boolean | undefined> {
        let result = await this.authService.signup(Body);
        return result;
    }

    @Post('login')
    async signin(@Body() Body: authCredentialsDto): Promise<object | undefined> {
        let result = await this.authService.signin(Body);
        return result;
    }
}
