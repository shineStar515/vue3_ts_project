import MyRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/config'
import { localCache } from '@/utils/cache'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      const token = localCache.get('token')
      if (config.headers && token) {
        config.headers!.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})
export default myRequest
