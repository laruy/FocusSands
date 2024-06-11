import { TaskType } from '../types/TaskType';

export interface TaskInterface {
  id?: string;
  title: string;
  description: string;
  timer?: string;
  concluded?: TaskType;
}

export interface TaskCondludedInterface {
  concluded: TaskType;
}
