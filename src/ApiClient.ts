import axios from 'axios';
import {getToken, removeToken} from './services/auth.service';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
});

instance.interceptors.request.use(async config => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      await removeToken();
    }
    return Promise.reject(error);
  },
);

export default instance;
