import { createStore, Store, useStore as useVuexStore } from 'vuex'
import loginModule from './login/login'
import { IRootState, IStoreType } from './types'
// 公共状态存放处，处理公共状态的逻辑也可以写在这里
const store = createStore<IRootState>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

// 对store中的数据进行初始化
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
