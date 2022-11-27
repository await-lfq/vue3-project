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
  resolve: {
    alias: [ // 配置src指向@
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  },
  css: {
    postcss: { // 移动端适配
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 选用375的设计稿开发
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  server: {
    open: true, // 自动在浏览器打开
    // proxy: { // 跨域代理
    //   '/lfq': {
    //     target: 'http://localhost:2000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/lfq/, '')
    //   },

    // },
  }
})




