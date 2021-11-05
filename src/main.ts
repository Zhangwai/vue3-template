import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css' // 引入样式
// import './service/axios.demo'
import uuRequest from './service'

//控制单独有拦截
uuRequest.get('/home/multidata', {
  showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('solo request')
      return config
    },
    responseInterceptor: (res) => {
      console.log('solo responese')
      return res
    }
  }
})
// //控制不想要拦截
// uuRequest.request({
//   url: '/home/multidata',
//   method: 'get'
// })
/**
 * 实现全局引入element-plus
 // import ElementPlus from 'element-plus'
 // import 'element-plus/dist/index.css'
 // app.use(ElementPlus)
 *
 */

//registerApp(app) //注册进app 方式1
//app.use(registerApp) //方式2
// app.use({
//   install: function (app) {}
// }) //方式3
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
