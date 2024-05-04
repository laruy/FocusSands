import { AxiosResponse } from 'axios';
import { api } from './api';
import {
  SigninResponse,
  SignupResponse,
} from '../shared/interfaces/responses/Auth';
import { PayloadSignin, PayloadSignup } from '../shared/interfaces/Auth';

export async function signin({
  email,
  password,
}: PayloadSignin): Promise<AxiosResponse<SigninResponse, SigninResponse>> {
  return await api.post('/auth/signin', { email, password });
}

export async function signup({
  name,
  email,
  password,
}: PayloadSignup): Promise<AxiosResponse<SignupResponse, SignupResponse>> {
  return await api.post('/auth/signup', { name, email, password });
}
