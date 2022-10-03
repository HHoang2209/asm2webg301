/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { authCredentialsDto } from './dtos/auth-credentials.dto';
import {JwtService} from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly JwtService: JwtService,
        private readonly userService: UserService,
    ) { }

    async signup(authCredentialsDto: authCredentialsDto): Promise<boolean | undefined> {
        let { username, password } = authCredentialsDto;
        try {
            let salt = await bcrypt.genSalt();
            let hashPass = await bcrypt.hash(password, salt);
            let newAccount = {
                username: username,
                password: hashPass
            }
            await this.userService.createUser(newAccount);
            return true;
        } catch (error) {
            if(error.message == 'ER_DUP_ENTRY')
                throw new ConflictException('Duplicate username!')
            throw new HttpException("Something went wrong", HttpStatus.BAD_REQUEST);
        }
    }

    
    async signin(authCredentialsDto: authCredentialsDto): Promise<object | undefined> {
        let { username, password } = authCredentialsDto;
        try {
            let signinUser = await this.userRepository.findOneByOrFail({username : username});
            let isMatch = await bcrypt.compare(password, signinUser.password);
            if(isMatch){
                let payload = {username};
                let accessToken = this.JwtService.sign(payload);
                return { accessToken };
            }
        } catch (error) {
            throw new HttpException("Signin Failed", HttpStatus.BAD_REQUEST);
        }
    }

    


}
