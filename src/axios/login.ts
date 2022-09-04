import server from "@/axios/request";
// 登录
export function login(data = {}){
  return server({
    method: "post",
    url: "",
    data,
  })
}

