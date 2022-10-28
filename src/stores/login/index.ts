import { defineStore } from 'pinia'
import {
  accountLogin,
  getUserInfoById,
  getUserMenuByRoleId
} from '@/service/modules/login'
import type { IAccount } from '@/types/login'
import { localCache } from '@/utils/cache'
import router from '@/router'
import type {
  ILoginStore,
  IUserInfo,
  IUserMenu
} from '@/stores/login/types/types'
import type { RouteRecordRaw } from 'vue-router'

const LOGIN_TOKEN = 'token'
const USER_INFO: IUserInfo = localCache.get('userInfo') as any as IUserInfo
const USER_MENU: IUserMenu = localCache.get('userMenu') as any as IUserMenu
const useLoinStore = defineStore('login', {
  state: (): ILoginStore => ({
    token: localCache.get(LOGIN_TOKEN) ?? '',
    userInfo: USER_INFO ?? {
      id: -1,
      name: '',
      realname: '',
      cellphone: -1,
      enable: -1,
      createAt: '',
      updateAt: '',
      role: {
        id: -1,
        name: '',
        intro: '',
        createAt: '',
        updateAt: ''
      },
      department: {
        id: -1,
        name: '',
        parentId: null,
        createAt: '',
        updateAt: '',
        leader: ''
      }
    },
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

      localCache.set('userinfo', this.userInfo)
      localCache.set('userMenu', this.userMenu)
      //动态路由
      const localRoutes: RouteRecordRaw[] = []
      const files: Record<string, any> = import.meta.glob(
        '../../router/main/**/*.ts',
        {
          eager: true
        }
      )
      for (const filesKey in files) {
        const module = files[filesKey]
        localRoutes.push(module.default)
      }
      //匹配路由
      const userMenu: IUserMenu = this.userMenu as any as IUserMenu
      for (const menu of userMenu) {
        for (const child of menu.children) {
          const route = localRoutes.find((item) => item.path === child.url)
          if (route) {
            router.addRoute('main', route)
          }
        }
      }
      router.push('/main')
    }
  }
})
export default useLoinStore
