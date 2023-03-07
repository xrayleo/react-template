import {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';
//参考
// https://github.com/ywanzhou/vue3-template/tree/master/src/service/request
// https://juejin.cn/post/7071518211392405541

export interface RequestInterceptor<T> {
  //请求拦截
  requestInterceptors?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  //响应拦截
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

//自定义传入的参数
export interface CreateRequestConfig<T = AxiosResponse>
  extends CreateAxiosDefaults {
  interceptors?: RequestInterceptor<T>;
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptor<T>;
}

export interface CancelRequestSource {
  [index: string]: () => void;
}

export type Result<T> = {
  code: number;
  message: string;
  result: T;
};
