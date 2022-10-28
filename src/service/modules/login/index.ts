import Request from '@/service'
import type { IAccount } from '@/types/login'

/*登录*/
export function accountLogin(account: IAccount) {
  return Request.post({
    url: '/login',
    data: account
  })
}

/*用户信息*/
export function getUserInfoById(id: number) {
  return Request.get({
    url: `/users/${id}`
  })
} /*用户菜单*/
export function getUserMenuByRoleId(roleId: number) {
  return Request.get({
    url: `/role/${roleId}/menu`
  })
}
