import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsString({ message: 'O email precisa ser uma string' })
  @IsNotEmpty({ message: 'O email não pode estar vázia' })
  @IsEmail()
  email: string;

  @IsString({ message: 'A senha precisa ser uma string' })
  @IsNotEmpty({ message: 'A senha não pode estar vázia' })
  @MinLength(8, { message: 'A senha precisa ter no mínimo 8 caracteres' })
  password: string;
}
