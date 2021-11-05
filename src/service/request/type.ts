import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface UuRequestHook {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}
export interface UuRequestConfig extends AxiosRequestConfig {
  interceptors?: UuRequestHook
  showLoading?: boolean
}
