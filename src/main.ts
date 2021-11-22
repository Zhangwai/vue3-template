import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from '@/global'
import 'element-plus/dist/index.css' // 引入样式
import 'normalize.css'
import '@/assets/css/index.less'
import { setupStore } from './store'
// registerApp(app) //注册进app 方式1
// app.use({
//   install: function (app) {}
// }) //方式3
const app = createApp(App)

app.use(globalRegister) //方式2
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
