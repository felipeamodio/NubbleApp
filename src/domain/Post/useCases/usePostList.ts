import { useEffect, useState } from 'react';

import {Post, postService} from '@domain';

export function usePostList(){
    const [postList, setPostList] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | null>(null);

    async function fetchData(){
        try {
            setError(null);
            setLoading(true);
            const list = await postService.getList();
            setPostList(list);
        } catch (err) {
            console.log('ERROR: ', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        postList,
        loading,
        error,
        refetch: fetchData,
    };
}
