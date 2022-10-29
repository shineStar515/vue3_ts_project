import type { RouteRecordRaw } from 'vue-router'
import type { IUserMenu } from '@/stores/login/types/types'

export let firstRoute: any = null

//动态路由
export function mapRoutesFn(userMenus: IUserMenu) {
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  )
  for (const filesKey in files) {
    const module = files[filesKey]
    localRoutes.push(module.default)
  }
  //匹配路由
  const userMenu: IUserMenu = userMenus as any as IUserMenu
  const routes = []
  for (const menu of userMenu) {
    for (const child of menu.children) {
      const route = localRoutes.find((item) => item.path === child.url)
      if (route) {
        routes.push(route)
      }
      if (!firstRoute && route) {
        firstRoute = child
      }
    }
  }
  return routes
}

//默认菜单
export function mapPathToRoute(path: string, userMenu: any[]) {
  for (const menu of userMenu) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        return subMenu
      }
    }
  }
}

//面包屑
export function mapPathToBread(path: string, userMenu: any[]) {
  const breadMenu: any = []
  for (const menu of userMenu) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        breadMenu.push({ name: menu.name })
        breadMenu.push({ name: subMenu.name, path: subMenu.url })
      }
    }
  }
  return breadMenu
}
