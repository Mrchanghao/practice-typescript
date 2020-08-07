import { apiWithAuth } from './utils/api';

export const fetchUserInfo = () => {
  return Promise.all([apiWithAuth.get(`${process.env.API_HOST}/account/info/`), apiWithAuth.get(`${process.env.API_HOST}/exams/online_products/?page=1`)]);
};
