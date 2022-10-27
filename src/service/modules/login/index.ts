import Request from '@/service'
import type { IAccount } from '@/types/login'

export function accountLogin(account: IAccount) {
  return Request.post({
    url: '/login',
    data: account
  })
}
