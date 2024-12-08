import axios, {AxiosError} from 'axios';
import {API_BASE_URL} from "@/constants/ApiConstants";
import axiosRetry from 'axios-retry';



export const client = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
});


axiosRetry(client, {
    retries: 3,
    retryDelay: (retryCount) => axiosRetry.exponentialDelay(retryCount),
    retryCondition: (error: AxiosError) =>
        axiosRetry.isNetworkError(error) || error.response?.status === 503,
});
