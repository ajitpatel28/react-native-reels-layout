import { createInfiniteQuery } from 'react-query-kit';
import { AxiosError } from 'axios';
import { client } from '../common/client';
import { ReelImage } from './types';

export const fetchImages = async (page = 1, limit = 10) => {
    const response = await client.get(`/v2/list?page=${page}&limit=${limit}`);
    return response.data;
};

type Response = ReelImage[];
type Variables = { limit?: number };
type PageParam = number;

export const useReelImages = createInfiniteQuery<Response, Variables, AxiosError, PageParam>({
    queryKey: ['reelImage'],
    initialPageParam: 1,
    fetcher: async (
        variables: Variables,
        { pageParam = 1 }: { pageParam: number }
    ) => {
        const response = await fetchImages(pageParam, variables?.limit || 10);
        return response;
    },
    getNextPageParam: ( allPages) => {
        return allPages.length + 1;
    },
});
