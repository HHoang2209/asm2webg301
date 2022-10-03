/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UserModule,
        PassportModule.register({defaultStrategy: 'jwt',}),
        JwtModule.register({
            secret: 'cigarette',
            signOptions: {
                expiresIn: 3700
            }
        }),
        TypeOrmModule.forFeature([User])
    ],
    providers: [AuthService],
    controllers: [AuthController],
    // exports: [AuthService]
})
export class AuthModule {}
