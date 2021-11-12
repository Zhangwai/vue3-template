// 全局导入组件
import { App } from 'vue'
// import 'element-plus/theme-chalk/base.css'
// App是vue中app的类型
import {
  CircleClose,
  User,
  Setting,
  ChatDotRound,
  Bell,
  Postcard,
  UserFilled,
  Iphone,
  Search,
  Refresh
} from '@element-plus/icons'

const components = [
  CircleClose,
  User,
  Setting,
  ChatDotRound,
  Bell,
  Postcard,
  UserFilled,
  Iphone,
  Search,
  Refresh
]

export default function (app: App): void {
  // 注册全局组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
