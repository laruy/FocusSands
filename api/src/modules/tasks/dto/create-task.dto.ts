import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TaskType } from '../entities/Task';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  timer: string;

  @IsNotEmpty()
  @IsEnum(TaskType)
  concluded: TaskType;

  @IsNotEmpty()
  @IsDateString()
  created_at: string;
}
