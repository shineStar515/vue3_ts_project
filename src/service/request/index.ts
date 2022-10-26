import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { myRequestConfig } from './types'

class myRequest {
  instance: AxiosInstance

  constructor(config: myRequestConfig) {
    this.instance = axios.create(config)

    //给每个实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        console.log('全局请求失败的拦截' + err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功的拦截')

        return res.data
      },
      (err) => {
        console.log('全局响应失败的拦截' + err)
      }
    )
    /*判断是否有特有拦截器*/
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.requestFailureFn
      )
      this.instance.interceptors.response.use(
        config.interceptors?.responseSuccessFn,
        config.interceptors?.responseFailureFn
      )
    }
  }

  /*网络请求方法*/
  request<T = any>(config: myRequestConfig<T>) {
    /*单次请求请求拦截*/
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors?.requestSuccessFn(config)
    }
    /*单次请求响应拦截*/
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors?.responseSuccessFn(res)
          }
          resolve(res)
        },
        (err) => reject(err)
      )
    })
  }

  private get<T = any>(config: myRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  private post<T = any>(config: myRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }

  private delete<T = any>(config: myRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }

  private patch<T = any>(config: myRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH ' })
  }
}

export default myRequest
