import axios, { AxiosResponse } from 'axios'
console.log(process.env.NODE_ENV)
//拦截器
//fn1：请求发送成功会执行的函数
//fn2：请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //给请求添加token
    //给请求添加loading
    console.log(config, '请求成功拦截')
    return config
  },
  (err) => {
    console.log('请求发生错误')
    return err
  }
)
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('响应失败的拦截')
    return err
  }
)

axios
  .get('http://123.207.32.32:8000/home/multidata')
  .then((res: AxiosResponse) => {
    console.log(res, 123)
  })
