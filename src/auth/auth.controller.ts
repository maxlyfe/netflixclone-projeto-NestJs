import { Controller, Body, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import AuthUser from './auth-user.decorator';
import { LoginDto, AuthResponse } from './dto/login.dto';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @Get('me')
  me(@AuthUser() user: User): User {
    return user;
  }
}
