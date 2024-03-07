import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers: {
        Authorization:
            'Bearer MQ.Y9uzj1sbZ3_-FfWP8-gkYnIl5sa263_mEik7kJEVJNv7nh6raKZj9VFvaHgv',
    },
});
