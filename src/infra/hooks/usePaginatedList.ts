import { useEffect, useState } from 'react';

import { Page } from '@types';

export function usePaginatedList<Data>(getList: (page: number) => Promise<Page<Data>>){
    const [list, setList] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | null>(null);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    async function fetchInitialData(){
        try {
            setError(null);
            setLoading(true);
            const {data, meta} = await getList(1);
            setList(data); // dessa forma ele vai pegar a lista atual e substituir pelos proximos 10 items da outra lista
            if (meta.hasNextPage){
                setPage(2);
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
            const {data, meta} = await getList(page);
            setList(prev => [...prev, ...data]); // dessa forma vai pegar a lista atual e concatenar com o resto da lista
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        list,
        loading,
        error,
        refresh: fetchInitialData,
        fetchNextPage,
        hasNextPage,
    };
}
