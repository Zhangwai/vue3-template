// 对menus进行映射
import { IBreadcrumb } from '@/base-ui/breadcrumb'
import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(useMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 加载某个文件夹， true表示递归的查找， 匹配.ts结尾的文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 拿到../router/main所有.ts文件路径
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    // 拿到所有路由
    allRoutes.push(route.default)
  })
  // console.log(allRoutes)

  // 2.再根据useMenus获取需要添加的routes
  // userMenus: 不能直接从userMenus中获取，需要进行判断type值
  // type === 1 -> children
  // type === 2 -> url -> route
  // 递归获取route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // type等于2才是需要的
      if (menu.type === 2) {
        // find函数，会遍历所有route对象，只会找到一个
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(useMenus)

  return routes
}

export { firstMenu }

// 根据路径匹配菜单
// export function pathMapToMenu(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }

// export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
//   const breadcrumbs: IBreadcrumb[] = []

//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         breadcrumbs.push({ name: menu.name, path: menu.url })
//         breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
//   return breadcrumbs
// }

// 合并成一个函数
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  // const breadcrumbs?: IBreadcrumb[] = []

  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []

  pathMapToMenu(userMenus, currentPath, breadcrumbs)

  return breadcrumbs
}

// 从userMenus中取到所有的按钮权限
export function mapMenusToPermission(userMenus: any[]) {
  const permissions: string[] = []
  // 递归
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      // 1,2级都不是想要的
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  // 调用递归
  _recurseGetPermission(userMenus)

  return permissions
}

// 获取菜单里面的叶子节点
export function menuMapLeafkeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}
