import axios, { AxiosRequestConfig } from 'axios'
import merge from 'lodash/merge'
import { getAccessToken } from './tokens'

const API_PREFIX = '/api'
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_HOST

export const AxiosInstance = axios.create({
    baseURL: API_BASE_URL + API_PREFIX
})

export const fetch = async <T>(config: AxiosRequestConfig) => {
    // TODO remove this and give proper type
    const result: any = {
        data: null,
        error: null,
    };

    try {
        const response = await AxiosInstance(config);
        result.data = response.data;
    } catch (err) {
        const { message, statusCode, error } = (err as any).response.data;
        const { status } = (err as any).response;

        result.error = {
            statusCode: statusCode || status,
            message: message || String(error),
        };
    }

    return result;
};

export const fetchAction = async <T>(config: AxiosRequestConfig) => {
    const token = getAccessToken();

    const specificConfig = {
        headers: { Authorization: `Bearer ${token}` || '' },
    };
    const axconfig = merge({}, config, specificConfig);
    const res = await fetch<T>(axconfig);
    const { data, error } = res;

    // TODO remove this and give proper type
    const result: any = { data, error };

    if (error) {
    }

    return result;
};

export default AxiosInstance