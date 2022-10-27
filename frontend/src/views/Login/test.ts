import { ref, reactive, getCurrentInstance} from "vue";
console.log((getCurrentInstance() as any).appContext.config.globalProperties.$toast);
