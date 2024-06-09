import { TaskType } from '../../types/TaskType';

export interface TaskResponse {
  id: string;
  userId: string;
  title: string;
  description: string;
  timer: string;
  concluded: TaskType;
  created_at: string;
}
