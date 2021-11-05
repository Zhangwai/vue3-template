//service统一出口
import UuRequest from './request'
import config from './request/config'
const uuRequest = new UuRequest({
  baseURL: config.BASE_URL,
  timeout: config.TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦击123', config)
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求拦击456')
      return err
    },
    responseInterceptor: (res) => {
      console.log('请求拦击789')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('请求拦击1011')
      return err
    }
  }
})

export default uuRequest
