import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bearerapi.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;