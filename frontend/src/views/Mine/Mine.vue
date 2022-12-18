<template>
  <div class="mine">
    
    <!--未登录 -->
    <div v-if="!login" class="no-login">
      <van-empty @click="router.push('/login')" description="未登录" />
      <van-grid class="grid-container" :column-num="2">
        <van-grid-item icon="star-o" text="收藏" />
        <van-grid-item icon="clock-o" text="历史" />
      </van-grid>
      <van-cell-group>
        <van-cell title="消息通知" is-link />
        <van-cell title="小智同学" is-link />
      </van-cell-group>
    </div>
    <!-- 已登录 -->
    <div v-else class="login">
      <div class="header">
        <div class="mine-info">
          <van-image class="avatar" fit="cover" round width="100px" height="100px" :src="userinfo.image" />
          <span class="name">{{ userinfo.name }}</span>
          <van-button color="#fff" class="info-btn" round type="primary" size="mini">编辑资料</van-button>
        </div>
        <div class="count-container">
          <div class="item">
            <span>{{ userinfo.headlineCount }}</span>
            <span>头条</span>
          </div>
          <div class="item">
            <span>{{ userinfo.attentionCount }}</span>
            <span>关注</span>
          </div>
          <div class="item">
            <span>{{ userinfo.silkCount }}</span>
            <span>粉丝</span>
          </div>
          <div class="item">
            <span>{{ userinfo.praiseCount }}</span>
            <span>获赞</span>
          </div>
        </div>
      </div>
      <van-grid class="grid-container" :column-num="2">
        <van-grid-item icon="star-o" text="收藏" />
        <van-grid-item icon="clock-o" text="历史" />
      </van-grid>
      <van-cell-group>
        <van-cell title="消息通知" is-link />
        <van-cell title="小智同学" is-link />
      </van-cell-group>
      <div  class="footer">
        <span @click="logout">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { computed, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { showModal, clearStorage, showToast } from "@/utils/tools";
import { getUserInfo } from "@/axios/mine";
const store = useStore();// store
const router = useRouter(); // router
// 获取用户信息
interface UserinfoType {
  [property: string]: any
}
const userinfo: Ref<UserinfoType> = ref({});
onMounted(async () => {
  interface ResType {
    [property: string]: any
  }
  let res: ResType;
  try {
    res = await getUserInfo({ name: store.state.userinfo.username })
  } catch (error) {
    return
  }
  if (res.code === 0) {
    res.data.image = import.meta.env.VITE_IMG_URL + res.data.image
    userinfo.value = res.data;
  } else {
    showToast(res.msg)
  }
})
// 是否登录 
const login = computed(() => store.state.userinfo)
// 退出登录
async function logout(): Promise<any> {
  try {
    await showModal("是否要退出登录");
  } catch (error) {
    return;
  }
  store.commit("setUserinfo", null);
  clearStorage();
  router.push("login");
}
</script>
<style lang="scss" scoped>
.mine {

  // 未登录
  .no-login {
    .grid-container {
      :deep(.van-icon) {
        color: red;
      }
    }
  }

  // 已登录
  .login {
    .header {
      background: #1989fa;
      padding: 40px 0;

      .mine-info {
        display: flex;
        align-items: center;

        .avatar {
          margin: 0 9px 0 20px;
        }

        .name {
          margin-right: 100px;
          font-size: 15px;
          color: #fff;
        }

        .info-btn {
          color: #646566 !important;
        }
      }

      .count-container {
        display: flex;
        margin-top: 10px;

        .item {
          flex: 1 0 0;
          font-size: 15px;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    .grid-container {
      :deep(.van-icon) {
        color: red;
      }
    }

    .footer {
      text-align: center;
      padding: 50px 0;
      color: red;
      font-size: 15px;
    }
  }
}
</style>