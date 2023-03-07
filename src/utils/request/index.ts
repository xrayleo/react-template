import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { Result } from './types';

/**
 * 拦截器封装:
 *  1.类拦截器
 *  2.实例拦截器
 *  3.接口拦截器
 */
export class Request {
  instance: AxiosInstance; //创建axios实例
  baseConfig: AxiosRequestConfig = {
    // 配置访问域名和超时时间
    // baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
  };
  // 构造方法
  constructor(config: AxiosRequestConfig) {
    // axios创建实例对象
    this.instance = axios.create(Object.assign(this.baseConfig, config));
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // console.log('全局请求拦截器');
        const token: string | null = localStorage.getItem('token');
        if (token === null) return config;
        config.headers.Authorization = 'Bearer' + token;
        return config;
      },
      (err: any) => err,
    );
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // console.log('全局响应拦截器');
        return res;
      },
      (err: any) => err,
    );
  }
  //定义请求方法
  public request(config: InternalAxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<Result<T>> {
    return this.instance.post(url, data, config);
  }

  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<Result<T>> {
    return this.instance.put(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<Result<T>> {
    return this.instance.delete(url, config);
  }
}

export default new Request({});
