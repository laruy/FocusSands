import {
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { TaskType } from '../entities/Task';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Precisa informar o título.' })
  @IsString({ message: 'Título precisa ser uma string.' })
  @MinLength(2, { message: 'Título precisa conter no minímo 2 caracteres.' })
  @MaxLength(60, {
    message: 'Título precisa conter no máximo 60 caracteres.',
  })
  title: string;

  @IsNotEmpty({ message: 'Precisa informar a descrição.' })
  @IsString({ message: 'Descrição precisa ser uma string.' })
  @MinLength(5, { message: 'Descrição precisa conter no minímo 5 caracteres.' })
  @MaxLength(225, {
    message: 'Descrição precisa conter no máximo 225 caracteres.',
  })
  description: string;

  @IsNotEmpty({ message: 'Precisa informar o tempo.' })
  @IsString({ message: 'O tempo precisa ser uma string.' })
  @Matches(/^\d{2}:\d{2}$/, {
    message: 'O tempo precisa estar no formato: "00:00".',
  })
  @ValidateIf((_, value) => value != undefined)
  timer?: string;

  @IsNotEmpty({ message: 'Precisa informar se está concluído ou não.' })
  @IsEnum(TaskType, { message: 'Precisa informar: "FINISHED" | "UNFINISHED".' })
  @ValidateIf((_, value) => value != undefined)
  concluded?: TaskType;
}
