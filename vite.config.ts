import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ // 按需引入vant组件
      resolvers: [VantResolver()],
    }),
  ],
  resolve: { // 配置src指向@
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  },
  css: { // 移动端适配
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue({ file }) { return file.indexOf('vant') !== -1 ? 37.5 : 75 }, // vant设计稿为375，其它设计稿为75
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
})
