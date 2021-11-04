import { User } from '.prisma/client';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
}
