import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface myInterceptor<T> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface myRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: myInterceptor<T>
}
