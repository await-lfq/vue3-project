import axios from "axios";
// 创建axios实例
const server = axios.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  timeout: 60000,
  withCredentials: false,
  responseType: "json"
});
// 请求拦截器
server.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)
// 响应拦截器
server.interceptors.response.use(
  res => res.data,
  error => Promise.reject(error)
)
export default server