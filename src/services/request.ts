import { RequestConfig } from '@umijs/max';

export const request: RequestConfig = {
  timeout: 60000,
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },

  //请求拦截器
  requestInterceptors: [
    // 直接写一个 function，作为拦截器
    (url, options) => {
      // do something
      return { url, options };
    },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (url, options) => {
        return { url, options };
      },
      (error: any) => {
        return Promise.reject(error);
      },
    ],
    // 数组，省略错误处理
    [
      (url, options) => {
        return { url, options };
      },
    ],
  ],
  //响应拦截器
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    (response) => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      const { data = {} as any, config } = response;
      // do something
      console.log(data);
      console.log(config);

      return response;
    },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (response) => {
        return response;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    ],
    // 数组，省略错误处理
    [
      (response) => {
        return response;
      },
    ],
  ],
};
