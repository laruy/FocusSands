import { AxiosResponse } from 'axios';
import { api } from './api';
import { formatDateYYYYmmDD } from '../shared/utils/date';
import { TaskResponse } from '../shared/interfaces/responses/Task';
import {
  TaskCondludedInterface,
  TaskInterface,
} from '../shared/interfaces/Task';
import { TaskType } from '../shared/types/TaskType';
import { CalendarDates } from '../shared/interfaces/Calendar';

export async function findAllTasksCurrentDate(): Promise<
  AxiosResponse<TaskResponse[], TaskResponse[]>
> {
  return await api.get('/tasks', {
    params: {
      initialDate: formatDateYYYYmmDD(new Date()),
      finalDate: formatDateYYYYmmDD(new Date()),
    },
  });
}

export async function findAllTasks({
  initialDate,
  finalDate,
}: CalendarDates): Promise<AxiosResponse<TaskResponse[], TaskResponse[]>> {
  return await api.get('/tasks', {
    params: {
      initialDate,
      finalDate,
    },
  });
}

export async function findTask(
  taskId: string
): Promise<AxiosResponse<TaskResponse, TaskResponse>> {
  return await api.get(`/tasks/${taskId}`);
}

export async function createTask(
  data: TaskInterface
): Promise<AxiosResponse<TaskResponse>> {
  return await api.post('/tasks', data);
}

export async function deleteTask(taskId: string): Promise<void> {
  return await api.delete(`/tasks/${taskId}`);
}

export async function updateTask(
  taskId: string,
  data: TaskInterface
): Promise<AxiosResponse<TaskResponse>> {
  return await api.put(`/tasks/${taskId}`, data);
}

export async function updateConcludedTask(
  taskId: string,
  status: TaskType
): Promise<void> {
  const data: TaskCondludedInterface = {
    concluded:
      status === TaskType.FINISHED ? TaskType.UNFINISHED : TaskType.FINISHED,
  };

  return await api.put(`/tasks/${taskId}/status`, data);
}
