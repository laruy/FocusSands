import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'O nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O nome não pode estar vázio.' })
  name: string;
}
