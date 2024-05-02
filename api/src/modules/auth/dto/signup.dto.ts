import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString({ message: 'O nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O nome não pode estar vázia.' })
  name: string;

  @IsString({ message: 'O email precisa ser uma string.' })
  @IsNotEmpty({ message: 'O email não pode estar vázia.' })
  @IsEmail(undefined, {
    message: 'O e-mail precisa esta num formato de e-mail válido.',
  })
  email: string;

  @IsString({ message: 'A senha precisa ser uma string.' })
  @IsNotEmpty({ message: 'A senha não pode estar vázia.' })
  @MinLength(8, { message: 'A senha precisa ter no mínimo 8 caracteres.' })
  password: string;
}
