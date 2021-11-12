import uuRequest from '../index'
import { IAccount, IDataType } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' //用法 /role/id/menu
}
export function accountLoginRequest(account: IAccount) {
  return uuRequest.post<IDataType>({
    url: LoginAPI.AccountLogin,
    data: {
      name: account.username,
      password: account.password
    }
  })
}

export function requestUserInfoById(id: number) {
  return uuRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
export function requestUserMenusByRoleId(id: number) {
  return uuRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
