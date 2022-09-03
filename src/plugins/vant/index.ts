import { createApp } from 'vue';
import { Button } from 'vant';
const app = createApp({});
const componentsList:Array<any>=[Button] 
componentsList.forEach(item=>{
  app.use(item);
})
