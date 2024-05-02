import { BadRequestException, Injectable } from '@nestjs/common';
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
    const { title, description, timer, concluded } = createTaskDto;
    const task = await this.tasksRepo.create({
      data: {
        userId,
        title,
        description,
        timer,
        concluded,
        created_at: new Date(
          Date.UTC(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate(),
            new Date().getHours(),
            new Date().getMinutes(),
            new Date().getSeconds(),
            new Date().getMilliseconds(),
          ),
        ),
      },
    });

    return task;
  }

  async update(userId: string, taskId: string, updateTaskDto: UpdateTaskDto) {
    await this.validateTaskOwnershipService.validate(userId, taskId);

    const { title, description, timer, concluded } = updateTaskDto;
    const task = await this.tasksRepo.update({
      where: {
        id: taskId,
      },
      data: {
        userId,
        title,
        description,
        timer,
        concluded,
      },
    });

    return task;
  }

  async remove(userId: string, taskId: string) {
    await this.validateTaskOwnershipService.validate(userId, taskId);

    await this.tasksRepo.delete({
      where: {
        id: taskId,
      },
    });

    return null;
  }

  async findAll(
    userId: string,
    filters: { initialDate: string; finalDate: string },
  ) {
    const initial_date = filters?.initialDate
      ? this.formatDateYearMonthDay(filters?.initialDate)
      : undefined;
    const final_date = filters?.finalDate
      ? this.formatDateYearMonthDay(filters?.finalDate)
      : undefined;

    const gte_initial_date: Date | undefined = initial_date
      ? new Date(
          Date.UTC(
            initial_date.year,
            initial_date.month,
            initial_date.day,
            0,
            0,
            0,
          ),
        )
      : undefined;

    const lt_final_date: Date | undefined = final_date
      ? new Date(
          Date.UTC(
            final_date.year,
            final_date.month,
            final_date.day,
            23,
            59,
            59,
          ),
        )
      : undefined;

    if (
      gte_initial_date &&
      lt_final_date &&
      lt_final_date.getTime() < gte_initial_date.getTime()
    ) {
      throw new BadRequestException(
        'Data Final precisa ser menor que Data de Início.',
      );
    }

    return this.tasksRepo.findMany({
      where: {
        userId,
        created_at: {
          gte: gte_initial_date,
          lt: lt_final_date,
        },
      },
    });
  }

  private formatDateYearMonthDay(date: string): {
    year: number;
    month: number;
    day: number;
  } {
    const partitional_date = date?.split('-');
    const year = partitional_date[0]
      ? Number(partitional_date[0])
      : new Date().getFullYear();
    const month = partitional_date[1]
      ? Number(partitional_date[1])
        ? Number(partitional_date[1]) - 1
        : Number(partitional_date[1])
      : new Date().getMonth();
    const day = partitional_date[2]
      ? Number(partitional_date[2])
      : new Date().getDate();

    return { year, month, day };
  }
}
