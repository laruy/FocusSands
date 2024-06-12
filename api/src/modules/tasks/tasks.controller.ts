import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateStatusTaskDto, UpdateTaskDto } from './dto/update-task.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { OptionalParseDatePipe } from 'src/shared/pipes/OptionalParseDatePipe';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@ActiveUserId() userId: string, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(userId, createTaskDto);
  }

  @Put(':taskId')
  update(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(userId, taskId, updateTaskDto);
  }

  @Put(':taskId/status')
  updateStatus(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() updateStatusTaskDto: UpdateStatusTaskDto,
  ) {
    return this.tasksService.updateStatus(userId, taskId, updateStatusTaskDto);
  }

  @Delete(':taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
  ) {
    return this.tasksService.remove(userId, taskId);
  }

  @Get()
  findAll(
    @ActiveUserId() userId: string,
    @Query('initialDate', OptionalParseDatePipe) initialDate: string,
    @Query('finalDate', OptionalParseDatePipe) finalDate: string,
  ) {
    return this.tasksService.findAll(userId, { initialDate, finalDate });
  }

  @Get(':taskId')
  findTask(
    @ActiveUserId() userId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
  ) {
    return this.tasksService.findTask(userId, taskId);
  }
}
