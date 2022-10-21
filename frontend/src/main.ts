import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible";
import router from "@/routers/index";
import "reset.css"; // 重置默认样式
import './style.scss' // 全局样式
createApp(App).use(router).mount('#app')
