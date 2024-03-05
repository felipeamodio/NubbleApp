import { PageAPI, api } from '@api';

import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
    await new Promise(resolve => setTimeout(() => resolve(''), 2000));
    const response = await api.get<PageAPI<PostAPI>>('user/post');
    return response.data;

    // let response = await fetch('http://localhost:3333/user/post', {
    //     method: 'GET',
    //     headers: {
    //     Authorization:
    //         'Bearer Mg.OYakB8MtFLXS_3CpNeKiB1idxKj5X35gnTw-IbuvE1WgCQ7iUaGOQpRrC_BN',
    //     },
    // });

    // let data: PageAPI<PostAPI> = await response.json();
    // console.log('DATA: ', data);
    // return data;
}

export const postApi = {
    getList,
};
