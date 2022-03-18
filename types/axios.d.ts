import { AxiosRequestConfig } from 'axios'
export interface RequestOptions {
	isLoad?: boolean
}
export interface NewAxiosRequestConfig extends AxiosRequestConfig {
	headers?: any
}
export {}
