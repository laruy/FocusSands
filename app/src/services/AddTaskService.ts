import { AxiosResponse } from 'axios';
import { api } from './api';
import { formatDateYYYYmmDD } from '../shared/utils/date';
import { TaskResponse } from '../shared/interfaces/responses/Task';


export async function saveTask(data: any): Promise<void> {
    console.log("data: ", data)
    await api.post(`/tasks`, data);
}