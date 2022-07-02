import axios from "axios";
import Cache from "@/utils/Cache";
import { useRouter } from "vue-router";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ElMessage } from "element-plus";
const services: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

const Router = useRouter();

services.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cache.getCache("token");
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
services.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 401) {
      console.log(111);
      ElMessage.error("身份过期，请重新登录");
      Router.push("/login");
    }
    return response;
  },
  (err: AxiosError) => {
    Promise.reject(err);
  }
);

export async function request<T>(config: AxiosRequestConfig) {
  const res = await services.request<T>(config);
  return res.data;
}
