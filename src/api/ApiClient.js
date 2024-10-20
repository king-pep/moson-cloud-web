import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api-dev.mosontech.co.za/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.reload();
        }
        return Promise.reject(error);
    }
);

export default apiClient;
