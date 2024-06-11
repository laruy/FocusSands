import { TaskType } from '../entities/Task';
import { CreateTaskDto } from './create-task.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto extends CreateTaskDto {}

export class UpdateStatusTaskDto {
  @IsNotEmpty({ message: 'Precisa informar se está concluído ou não.' })
  @IsEnum(TaskType, { message: 'Precisa informar: "FINISHED" | "UNFINISHED".' })
  concluded: TaskType;
}
