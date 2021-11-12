import { Module } from 'vuex'
import { ILoginState, IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'

// Module<S,R> S,R必传 S代表state返回值类型 R代表模块根类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    // 改变token
    changeToken(state, token: string) {
      state.token = token
    },
    // 保存userInfo
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1、实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const {
        data: {
          data: { token, id }
        }
      } = loginResult
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3、用户菜单请求
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data.data
      console.log(userMenus)
    }
  }
}
export default loginModule
