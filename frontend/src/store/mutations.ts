import { setStorage } from "@/utils/tools";
interface MutationsType {
  [property: string]: (state: any, params: any) => void
}
const mutaions: MutationsType = {
  // 设置用户信息
  setUserinfo(state: any, params: any) {
    state.userinfo = params;
    setStorage("userinfo", params)
  }
};

export default mutaions

