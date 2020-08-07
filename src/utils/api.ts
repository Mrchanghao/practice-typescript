import axios from 'axios';
import { tokenManager } from '~/domain/tokenManager';

export const apiWithAuth = axios.create();

apiWithAuth.interceptors.request.use((config) => {
  if (!tokenManager) return config;
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: tokenManager.token && `JWT ${tokenManager.token}`,
    },
  };
});
