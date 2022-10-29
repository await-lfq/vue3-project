import { getStorage } from "@/utils/tools";
interface stateType {
  [properties: string]: any
};

const state: stateType = {
  userinfo: getStorage("userinfo") ? getStorage("userinfo") : null, // 用户信息
};

export default state