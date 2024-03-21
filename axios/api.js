import API_URL from '@/utils/API_URL';
import axios from 'axios';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        console.log('Request Interceptor:', config);
        return config;
    },
    (error) => {
        console.error('Request Error Interceptor:', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log('Response Interceptor:', response);
        return response;
    },
    (error) => {
        console.error('Response Error Interceptor:', error);
        return Promise.reject(error);
    }
);

export default api;
