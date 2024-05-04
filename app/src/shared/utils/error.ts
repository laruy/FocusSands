import { HttpException } from '../interfaces/responses/Global.config';

export function msgError(err: HttpException): HttpException<string> {
  let message = '';

  if (Array.isArray(err.message))
    message = err.message.reduce((acc, msg) => (acc += `${msg}\n`), '');
  else message = err.message;

  return {
    error: err.error,
    statusCode: err.statusCode,
    message:
      message ||
      'Algo inesperado aconteceu, caso o erro persista acione a equipe técnica!',
  };
}
