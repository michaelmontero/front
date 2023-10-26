import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_HOST } from '../common/environments';

export class Provider {
    private readonly axios: AxiosInstance;

    constructor(configInstance: AxiosRequestConfig<any>) {
        this.axios = axios.create({ 
            ...configInstance
        });
    }

    protected get<T>(endpoint: string, config: AxiosRequestConfig = {}): Promise<T> {
        return this.axios
            .get<T>(endpoint, {
                ...config
            })
            .then((res) => res.data)
            .catch((err) => {
                err = JSON.parse(JSON.stringify(err));
                return Promise.resolve({
                    error: { message: err?.message, status: err?.status, timestamp: new Date().getTime() }
                } as any);
            });
    }

    protected post<T>(endpoint: string, data: any, config: AxiosRequestConfig = {}): Promise<T> {
        return this.axios
            .post<T>(endpoint, data, {
                ...config
            })
            .then((res) => res.data)
            .catch((err) => {
                err = JSON.parse(JSON.stringify(err));
                return Promise.resolve({
                    error: { message: err?.message, status: err?.status, timestamp: new Date().getTime() }
                } as any);
            });
    }

    protected delete<T>(endpoint: string, config: AxiosRequestConfig = {}): Promise<T> {
        return this.axios
            .delete<T>(endpoint, {
                ...config
            })
            .then((res) => res.data)
            .catch((err) => {
                err = JSON.parse(JSON.stringify(err));
                return Promise.resolve({
                    error: { message: err?.message, status: err?.status, timestamp: new Date().getTime() }
                } as any);
            });
    }
}
