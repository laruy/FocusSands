import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { TasksRepository } from 'src/shared/database/repositories/tasks.repositories';
import { ValidateTaskOwnershipService } from './validate-task-ownership.service';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepo: TasksRepository,
    private readonly validateTaskOwnershipService: ValidateTaskOwnershipService,
  ) {}

  async create(userId: string, createTaskDto: CreateTaskDto) {
    return 'Vai criar: ' + userId + createTaskDto.title;
  }

  findAllByUserId(userId: string) {
    return 'Vai buscar tudo por usuário id: ' + userId;
  }

  async update(userId: string, taskId: string, updateTaskDto: UpdateTaskDto) {
    console.log({ taskId, updateTaskDto });
    return 'Vai atualizar: ' + userId;
  }

  async remove(userId: string, taskId: string) {
    console.log({ userId, taskId });
    return null;
  }
}
