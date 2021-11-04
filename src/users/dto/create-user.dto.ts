import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail({}, { message: 'Infome um endereço de email valido.' })
  @IsNotEmpty()
  email: string;

  @IsString({ message: 'Infome uma senha valida' })
  @Length(6, 16)
  password: string;

  @IsString({ message: 'As senhas devem ser iguais;' })
  @Length(6, 16)
  passwordConfirmation: string;
}
