import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_HOST } from '../common/environments';

export class Provider {
    private readonly axios: AxiosInstance;

    constructor(configInstance: AxiosRequestConfig<any>) {
        this.axios = axios.create({
            baseURL: API_HOST,
            ...configInstance
        });
    }

    protected get<T>(endpoint: string, config: AxiosRequestConfig = {}): Promise<T> {
        return this.axios
            .get<T>(endpoint, {
                ...config
                // headers: { ...config.headers, Authorization: `Bearer ${Provider.token}`, 'x-company': Provider.companyId }
            })
            .then((res) => res)
            .catch((err) => {
                err = JSON.parse(JSON.stringify(err));
                return Promise.resolve({
                    error: { message: err?.message, status: err?.status, timestamp: new Date().getTime() }
                } as any);
            });
    }
}
