import { AxiosError, HttpStatusCode } from 'axios';

export interface HttpException<T_M = string | string[]> {
  message: T_M;
  error: string;
  statusCode: HttpStatusCode;
}

export interface AxiosErrorException
  extends AxiosError<HttpException, HttpException> {}
