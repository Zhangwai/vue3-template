import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { UuRequestHook, UuRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

const DEFAULT_LOADING = true
// axios => axios instance (实例)

class uuRequest {
  instance: AxiosInstance
  interceptors?: UuRequestHook
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: UuRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    //从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有实例都有的全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局拦截123')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'loadding...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        console.log('全局拦截456')
        return res
      },
      (err) => {
        this.loading?.close()
        switch (err.responese.status) {
          case 404:
            console.log('404 not found')
            break
        }
        return err
      }
    )
  }

  request<T>(config: UuRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //重新设置回true
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(url: string, config?: UuRequestConfig): Promise<T> {
    return this.request<T>({ ...config, url, method: 'GET' })
  }
  post<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, url, method: 'POST' })
  }
}
export default uuRequest
