import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie, setCookie, removeCookie } from "./token";
import { message } from "antd";

const instance = axios.create({
  baseURL: "/",
  timeout: 8000,
});

//  请求拦截，在请求之前判断是否存在 token 如果存在在headers中携带上 token
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getCookie();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

// 响应拦截
// 成功： 200 201(未携带相应数据) 202（未登陆） 500（服务端错误）
// 登陆成功1000 登陆失败 1001 验证码错误 1002
// 用户已被注册： 1003 注册失败： 1004 注册成功： 1005 用户验证过期： 1006
// 验证码过期 ： 1007
instance.interceptors.response.use(
  (response) => {
    let { data } = response;
    switch (data.status) {
      case 1000: {
        setCookie(data.token);
        message.success("登陆成功");
        break;
      }
      case 202: {
        message.error("当前为未陆，请先登陆");
        break;
      }
      case 500: {
        message.error("服务器异常，请稍后重试");
        break;
      }
      case 1002: {
        message.error("验证码错误");
        break;
      }
      case 1003: {
        message.error("用户已被注册");
      }
      case 1006: {
        message.error("当前登陆过期，请重新登陆");
        break;
      }
      case 1007: {
        message.error("验证码过期");
      }
      default: {
        message.error(data.data.msg || "未知错误");
        break;
      }
    }
    return response;
  },
  (err) => {
    message.error(err);
    return Promise.reject(err);
  }
);

export default instance;
