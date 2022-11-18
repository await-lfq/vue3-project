<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/qa" icon="search">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="manager-o">{{userinfo ? '我的' : '未登录'}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang='ts'>

import { ref, computed } from 'vue';
import { useStore } from "vuex";
const store = useStore();
const active = ref(0); // 默认选中
// 判断是否登录 
const userinfo = computed(() => store.state.userinfo)

</script>
<style scoped>

</style>