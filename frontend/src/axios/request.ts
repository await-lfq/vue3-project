import axios from "axios";
import { showFail } from "@/utils/tools";
import { getStorage } from "@/utils/tools";
// 创建axios实例
const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  timeout: 60000,
  withCredentials: false,
  responseType: "json"
});
// 请求拦截器
server.interceptors.request.use(
  config => {
    if (getStorage("userinfo")) {
      (config as any).headers.Authorization = `bearer ${getStorage("userinfo").token}`
    }
    return config
  },
  error => Promise.reject(error)
)
// 响应拦截器
server.interceptors.response.use(
  res => res.data,
  error => {
    showFail("服务器出错")
    return Promise.reject(error)
  }
)
export default server