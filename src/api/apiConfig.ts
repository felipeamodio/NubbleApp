import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers: {
        Authorization:
            'Bearer Mg.jI4vB1PbcVRHqk7UbVNZAjgQSyb4j_0f4K_Kr_dnoRnQT2O9cpRIpD3kG64u',
    },
});
