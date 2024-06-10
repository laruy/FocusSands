import { AxiosResponse } from 'axios';
import { api } from './api';
import { formatDateYYYYmmDD } from '../shared/utils/date';
import { TaskResponse } from '../shared/interfaces/responses/Task';

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

export async function deleteTask(taskId: string): Promise<void> {
  await api.delete(`/tasks/${taskId}`);
}

export async function updateTask(taskId: string, data: any): Promise<void> {
  await api.put(`/tasks/${taskId}`, data);
}
