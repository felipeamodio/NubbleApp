
import { useEffect, useState } from 'react';

import {Post, postService} from '@domain';

export function usePostList(){
    const [postList, setPostList] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | null>(null);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    async function fetchInitialData(){
        try {
            setError(null);
            setLoading(true);
            const {data, meta} = await postService.getList(1);
            setPostList(data); // dessa forma ele vai pegar a lista atual e substituir pelos proximos 10 items da outra lista
            if (meta.hasNextPage){
                setPage(2);
                setHasNextPage(true);
            } else {
                setHasNextPage(false);
            }
        } catch (err) {
            console.log('ERROR INITIAL DATA: ', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    async function fetchNextPage(){
        if (loading || !hasNextPage) {return;}
        try {
            setLoading(true);
            const {data, meta} = await postService.getList(page);
            setPostList(prev => [...prev, ...data]); // dessa forma vai pegar a lista atual e concatenar com o resto da lista
            if (meta.hasNextPage){
                setPage(prev => prev + 1);
            } else {
                setHasNextPage(false);
            }
        } catch (er) {
            console.log('ERROR NEXT PAGE: ', er);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInitialData();
    }, []);

    return {
        postList,
        loading,
        error,
        refresh: fetchInitialData,
        fetchNextPage,
    };
}
