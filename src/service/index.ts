import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';


const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

http.interceptors.request.use(
  (config) => {
    const user = getCookie('user');
    if(user) {
      config.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response?.status === 401 && window.location.pathname !== '/login') {
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
      deleteCookie('user');
    }

    return Promise.reject(error.response);
  }
);

export default http;
