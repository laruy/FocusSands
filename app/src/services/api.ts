import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export function setTokenOnHeader(token: string) {
  api.defaults.headers.common.Authorization = token;
}
