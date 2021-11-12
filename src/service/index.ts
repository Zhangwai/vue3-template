//service统一出口
import UuRequest from './request'
import config from './request/config'
import localCache from '@/utils/cache'

const uuRequest = new UuRequest({
  baseURL: config.BASE_URL,
  timeout: config.TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        // headers请求头 Authorization授权
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default uuRequest
