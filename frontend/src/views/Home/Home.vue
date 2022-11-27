<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav">
      <template #right>
        <van-button round  class="search-btn" icon="search">搜索</van-button>
      </template>
    </van-nav-bar>
    <!-- 标签页 -->
    <van-tabs class="tab-container" v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
      <van-tab title="标签 7">内容 7</van-tab>
      <van-tab title="标签 8">内容 8</van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang='ts'>
import { ref } from "vue";
import type { Ref } from "vue";
// 默认选中
const active: Ref<number> = ref(0)

</script>
<style lang="scss" scoped>
.home {

  // 导航栏
  .search-btn {
    width: 300px;
    height: 30px;
    background-color: #5babfb;
    border: none;
    color: #fff;

    &:deep(.van-icon-search) {
      color: #fff;
    }

  }

  // 标签页
  .tab-container {
    :deep(.van-tab) {
      border-right: 1px solid #edeff3;
    }

    :deep(.van-tabs__line) {
      width: 20px;
      height: 6px;
      background-color: #3296fa;
    }

    :deep(.van-tab--active) {
      color: red;
    }
  }
}
</style>