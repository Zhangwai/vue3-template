import { createStore } from 'vuex'
import loginModule from './login/login'
import { IRootState } from './types'
// 公共状态存放处，处理公共状态的逻辑也可以写在这里
const store = createStore<IRootState>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export default store
