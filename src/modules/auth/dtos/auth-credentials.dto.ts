/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, Matches, MinLength, MaxLength } from "class-validator";

export class authCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    username: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: "Password is too weak"})
    password: string;
}

