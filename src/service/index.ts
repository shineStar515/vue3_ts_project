import MyRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/config'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default myRequest
