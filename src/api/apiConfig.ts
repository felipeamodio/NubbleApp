import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers: {
        Authorization:
            'Bearer MQ.8B9sFvzyvlZZoWi1HTu3ap2WrZ-uqyaHZpsIFWWVIAE7tGjE2pe110xIluvv',
    },
});
