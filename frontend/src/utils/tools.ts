import { createApp } from 'vue';
import { Toast, Dialog } from 'vant';
const app = createApp({});
app.use(Toast).use(Dialog);
/**
 * @description 把数据存本地
 * @method setStorage
 * @param {string} key 存的key值
 * @param {any} data 存的数据
 */
export function setStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data))
};
/**
 * @description 取出本地的数据
 * @method getStorage
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
 * @description 清除本地的所有数据
 * @method clearStorage
 */
export function clearStorage(): void {
  localStorage.clear()
}
/**
 * @description 提示文字信息 
 * @method showToast
 * @param {string} message 提示信息 
 */
export function showToast(message: string): void {
  Toast(message);
}

/**
 * @description 提示成功信息 
 * @method showSuccess
 * @param {string} message 提示信息 
 */
export function showSuccess(message: string): void {
  Toast.success(message);
}
/**
 * @description 提示加载信息 
 * @method showLoading
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
 * @method showFail
 * @param {string} message 提示信息 
 */
export function showFail(message: string): void {
  Toast.fail(message);
}

/**
 * @description 模态框
 * @method showModal
 * @param {string} message 提示信息
 * @return {Promise} 
*/
export function showModal(message: string): Promise<any> {
  return Dialog.alert({
    title: '标题',
    message: message,
    showCancelButton: true,
  })
}



