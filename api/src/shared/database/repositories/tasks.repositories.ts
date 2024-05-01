import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class TasksRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.TaskFindManyArgs) {
    return this.prismaService.task.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.TaskFindFirstArgs) {
    return this.prismaService.task.findFirst(findFirstDto);
  }

  create(createDto: Prisma.TaskCreateArgs) {
    return this.prismaService.task.create(createDto);
  }

  update(updateDto: Prisma.TaskUpdateArgs) {
    return this.prismaService.task.update(updateDto);
  }

  delete(deleteDto: Prisma.TaskDeleteArgs) {
    return this.prismaService.task.delete(deleteDto);
  }
}
