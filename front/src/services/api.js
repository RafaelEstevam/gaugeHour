//TODO Define enviroment variables

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030' //BACKEND
});

export default api;