export interface ILoginState {
  token?: string
  userInfo?: any
  userMenus?: string[]
}
export interface IRootState {
  name?: string
  age?: number
}

export interface IRootWithModule {
  loginModule?: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
