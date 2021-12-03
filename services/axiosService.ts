import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class AxiosClient {
    protected readonly client: AxiosInstance;

    public constructor() {
        this.client = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            timeout: 5000,
        });
        this._initializeResponseInterceptor();
    }

    private _initializeResponseInterceptor(): void {
        this.client.interceptors.response.use(this._handleResponse, this._handleError);
    }

    private _handleResponse = ({ data }: AxiosResponse) => data;

    private _handleError = (error: AxiosError) => {
        switch (error.response?.status) {
            case 400: {
                break;
            }
            case 500: {
                break;
            }
            case 404: {
                break;
            }
            default:
                break;
        }
        return Promise.reject(error);
    };

    public async get<T>(url: string, params?: { [param: string]: string | string[] }): Promise<T> {
        return this.client.get<T>(url, { params } as AxiosRequestConfig);
    }

    public async post<T>(
        url: string,
        data: any,
        params?: { [param: string]: string | string[] }
    ): Promise<T> {
        return this.client.post<T>(url, data, { params } as AxiosRequestConfig);
    }

    public async postProgress<T>(url: string, data: any, config: AxiosRequestConfig): Promise<T> {
        return this.client.post<T>(url, data, config);
    }

    public async put<T>(
        url: string,
        data: any,
        params?: { [param: string]: string | string[] }
    ): Promise<T> {
        return this.client.put<T>(url, data, { params } as AxiosRequestConfig);
    }

    public async delete<T>(
        url: string,
        params?: { [param: string]: string | string[] }
    ): Promise<T> {
        return this.client.delete(url, { params } as AxiosRequestConfig);
    }

    public getAccessToken(): string | null {
        const accessToken = window.localStorage.getItem('accessToken');
        return accessToken;
    }
}

export default AxiosClient;
