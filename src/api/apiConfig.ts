import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers: {
        Authorization:
            'Bearer Mg.OYakB8MtFLXS_3CpNeKiB1idxKj5X35gnTw-IbuvE1WgCQ7iUaGOQpRrC_BN',
    },
});
