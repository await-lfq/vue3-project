import { createApp } from 'vue';
import { Toast } from 'vant';
const app = createApp({});
app.use(Toast);
/**
 * @description 把数据存本地
 * @param {string} key 存的key值
 * @param {any} data 存的数据
 */
export function setStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data))
};
/**
 * @description 取出本地的数据
 * @param {string} key 存的key值
 * @return {any} 取出本地的数据
 */
export function getStorage(key: string): any {
  try {
    return JSON.parse(localStorage.getItem(key) as any)
  } catch (error) {
    return localStorage.getItem(key)
  }
};
/**
 * @description 提示文字信息 
 * @param {string} message 提示信息 
 */
export function showToast(message: string): void {
  Toast(message);
}

/**
 * @description 提示成功信息 
 * @param {string} message 提示信息 
 */
export function showSuccess(message: string): void {
  Toast.success(message);
}
/**
 * @description 提示加载信息 
 * @param {string} message 提示信息 
 */
export function showLoading(message: string, forbidClick: boolean = true, duration: number = 0): void {
  Toast.loading({
    message,
    forbidClick,
    duration,
  });
}
/**
 * @description 提示加载信息 
 * @param {string} message 提示信息 
 */
export function showFail(message: string): void {
  Toast.fail(message);
}



