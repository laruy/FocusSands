import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from 'src/shared/database/repositories/tasks.repositories';

@Injectable()
export class ValidateTaskOwnershipService {
  constructor(private readonly tasksRepo: TasksRepository) {}

  async validate(userId: string, taskId: string) {
    const isOwner = await this.tasksRepo.findFirst({
      where: { id: taskId, userId },
    });

    if (!isOwner) throw new NotFoundException('Tarefa não encontrada.');
  }
}
