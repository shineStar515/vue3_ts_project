import { defineStore } from 'pinia'
import { accountLogin } from '@/service/modules/login'
import type { IAccount } from '@/types/login'
import { localCache } from '@/utils/cache'

const LOGIN_ID = 'id'
const LOGIN_TOKEN = 'token'
const LOGIN_NAME = 'name'

const useLoinStore = defineStore('login', {
  state: () => ({
    id: localCache.get(LOGIN_ID) ?? '',
    token: localCache.get(LOGIN_TOKEN) ?? '',
    name: localCache.get(LOGIN_NAME) ?? ''
  }),
  actions: {
    /*网络请求*/
    //  1.登录
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLogin(account)
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.name = loginResult.data.name
      localCache.set(LOGIN_ID, this.id)
      localCache.set(LOGIN_TOKEN, this.token)
      localCache.set(LOGIN_NAME, this.name)
    }
  }
})
export default useLoinStore
