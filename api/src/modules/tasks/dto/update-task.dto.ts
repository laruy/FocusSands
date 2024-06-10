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
  
  export class UpdateTaskDto {
    title: string;
    description: string;
    timer?: string;
    concluded?: TaskType;
  }
