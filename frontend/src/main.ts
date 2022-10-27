import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible"; // 设置html字体大小
import "reset.css"; // 重置默认样式
import './style.scss' // 全局样式
import router from "@/routers/index"; // 路由
import { Toast } from 'vant';// vant
import 'vant/es/toast/style';
import store from "@/store/index";
const app = createApp(App);
app.config.globalProperties.$toast = Toast;
app.use(store).use(router).use(Toast).mount('#app')

