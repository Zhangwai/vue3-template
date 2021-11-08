import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface UuRequestHook<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface UuRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: UuRequestHook<T>
  showLoading?: boolean
}
