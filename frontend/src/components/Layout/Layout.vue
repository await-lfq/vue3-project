<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/qa" icon="search">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
const active = ref(0);

</script>
<style scoped>

</style>