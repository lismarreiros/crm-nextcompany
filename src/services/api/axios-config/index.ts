import Constants from '@/constants';
import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

export const Api = () => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem('APP_ACCESS_TOKEN') || '""')}`
    }
  });

  api.interceptors.response.use(
    (reponse) => responseInterceptor(reponse),
    (error) => errorInterceptor(error),
  );

  return api;
};
