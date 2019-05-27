import config from '@/config';
import { app as store } from '@/index';
import axios, { AxiosRequestConfig } from 'axios';
import Storage from '../storage';
import { handleCommonError, handleNoCommontError } from './errorHandle';

const { host, urlPrefix, authKey, errorMsg } = config;

type optionsType = AxiosRequestConfig & {
  noLoading?: boolean;
  headers?: any;
  host?: string;
  urlPrefix?: string;
};

const request = async (url: string, options?: optionsType) => {
  const { CancelToken } = axios;
  const source = CancelToken.source();
  const Authorization = await Storage.get(authKey);
  // 默认参数
  const defaultOptions = {
    headers: {
      Authorization,
    },
    timeout: 30000,
    cancelToken: source.token,
  };

  // 按照条件覆盖掉默认header
  const newOptions = options || {};
  newOptions.headers = {
    ...defaultOptions.headers,
    ...newOptions.headers,
  };

  const configs = { ...defaultOptions, ...newOptions };
  const newUrl = `${newOptions.host || host}${newOptions.urlPrefix || urlPrefix}${url}`;
  // 开始loading
  if (!newOptions.noLoading) {
    store._store.dispatch({
      type: 'global/setState',
      payload: {
        loading: true,
      },
    });
  }
  // tslint:disable-next-line: no-console
  console.log(newUrl);
  // tslint:disable-next-line: no-console
  console.log(configs, 'configs');
  return axios(newUrl, configs);
};

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    store._store.dispatch({
      type: 'global/setState',
      payload: {
        loading: false,
      },
    });
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    const { response } = error;
    // 请求有响应
    if (response) {
      const { status, data } = response;
      data.message = data.message || errorMsg;
      if (status === 400) {
        handleCommonError(data);
      } else {
        handleNoCommontError(data);
      }
    }
    store._store.dispatch({
      type: 'global/setState',
      payload: {
        loading: false,
      },
    });
    return Promise.reject(error);
  }
);

export default request;
