import { AxiosResponse } from 'axios';
import { api } from './api';
import {
  UserResponse,
  UserUpdateResponse,
} from '../shared/interfaces/responses/User';
import { UserUpdate } from '../shared/interfaces/User';

export async function me(): Promise<AxiosResponse<UserResponse, UserResponse>> {
  return await api.get('/users/me');
}

export async function update(
  data: UserUpdate
): Promise<AxiosResponse<UserUpdateResponse, UserUpdateResponse>> {
  return await api.put('/users', data);
}
