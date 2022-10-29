import { defineStore } from 'pinia'
import router from '@/router'
import { localCache } from '@/utils/cache'
import { mapRoutesFn } from '@/utils/mapRoutesFn'
import {
  accountLogin,
  getUserInfoById,
  getUserMenuByRoleId
} from '@/service/modules/login'
import type { IAccount } from '@/types/login'
import type {
  ILoginStore,
  IUserInfo,
  IUserMenu
} from '@/stores/login/types/types'

const LOGIN_TOKEN = 'token'
const USER_INFO: IUserInfo = localCache.get('userInfo') as any as IUserInfo
const USER_MENU: IUserMenu = localCache.get('userMenu') as any as IUserMenu
const useLoinStore = defineStore('login', {
  state: (): ILoginStore => ({
    token: '',
    userInfo: USER_INFO,
    userMenu: USER_MENU ?? []
  }),
  actions: {
    /*网络请求*/
    //  1.登录
    async loginAccountAction(account: IAccount) {
      //登录
      const loginResult = await accountLogin(account)
      this.token = loginResult.data.token
      localCache.set(LOGIN_TOKEN, this.token)
      const id = loginResult.data.id
      //用户信息
      const userInfoResult = await getUserInfoById(id)
      this.userInfo = userInfoResult.data
      //用户菜单
      const roleId = this.userInfo!.role.id
      const userMenuResult = await getUserMenuByRoleId(roleId)
      this.userMenu = userMenuResult.data

      localCache.set('userInfo', this.userInfo)
      localCache.set('userMenu', this.userMenu)
      //动态路由
      const routes = mapRoutesFn(this.userMenu as any as IUserMenu)
      routes.forEach((route) => router.addRoute('main', route))
      router.push('/main')
    },
    //  2.重新加载本地数据
    loadLocalCacheData() {
      const token = localCache.get(LOGIN_TOKEN)
      const userInfo = localCache.get('userInfo') as any as IUserInfo
      const userMenu = localCache.get('userMenu') as any as IUserMenu
      if (token && userInfo && userMenu) {
        this.token = token
        this.userInfo = userInfo
        this.userMenu = userMenu

        const routes = mapRoutesFn(this.userMenu as any as IUserMenu)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})
export default useLoinStore
