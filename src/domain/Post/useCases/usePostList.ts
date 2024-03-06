/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import {Post, postService} from '@domain';

export function usePostList(){
    const [postList, setPostList] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | null>(null);
    const [page, setPage] = useState(1);

    async function fetchData(){
        try {
            setError(null);
            setLoading(true);
            const list = await postService.getList(page);
            // setPostList(list); dessa forma ele vai pegar a lista atual e substituir pelos proximos 10 items da outra lista
            setPostList(prev => [...prev, ...list]); // dessa forma vai pegar a lista atual e concatenar com o resto da lista
            setPage(prev => prev + 1);
        } catch (err) {
            console.log('ERROR: ', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    function fetchNextPage(){
        if (!loading){
            fetchData();
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
        fetchNextPage,
    };
}
