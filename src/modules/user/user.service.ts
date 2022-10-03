/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { createUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}
    
    async findAll() : Promise<User[] | undefined> {
        try {
            let users = await this.userRepository.find();
            return users;
        } catch (error) {
            throw new HttpException('Something went wrong: ', error);
        }
    }

    async findOneById(id: string) : Promise<User | undefined> {
        try {
            let users = await this.userRepository.findOneBy({id: id});
            return users;
        } catch (error) {
            throw new HttpException('Something went wrong: ', HttpStatus.NOT_FOUND);
        }
    }

    async createUser(createUserDto: createUserDto) : Promise<InsertResult | undefined> {
        let userAccount = {
            username: createUserDto.username,
            password: createUserDto.password,
        }
        try {
            let savedUserAccount = await this.userRepository.insert(userAccount);
            return savedUserAccount;
        } catch (error) {
            throw new Error(error.code);
        }
    }
}
