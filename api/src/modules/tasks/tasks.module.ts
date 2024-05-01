import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { TasksController } from './tasks.controller';
import { ValidateTaskOwnershipService } from './services/validate-task-ownership.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, ValidateTaskOwnershipService],
})
export class TasksModule {}
