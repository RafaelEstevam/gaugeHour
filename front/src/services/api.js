//TODO Define enviroment variables

import auth from './auth';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030' //BACKEND
});

api.interceptors.request.use(async config => {
    const {userId, token} = auth.getUserAuth();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
});

export default api;