/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;
}