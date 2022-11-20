import server from "@/axios/request";
// 获取用户信息
export function getUserInfo(params = {}) {
  return server({
    method: "get",
    url: "/user/getUserinfo",
    params,
  })
}