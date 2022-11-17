<template>
  <div class="mine">
    <!--未登录 -->
    <div v-if="false" class="no-login">
      <van-empty description="未登录" />
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
    <div class="login">
      <div class="header">
        <div class="mine-info">
          <van-image class="avatar" fit="cover" round width="100px" height="100px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
          <span class="name">lfq</span>
          <van-button color="#fff" class="info-btn" round type="primary" size="mini">编辑资料</van-button>
        </div>
        <div class="count-container">
          <div class="item">
            <span>6</span>
            <span>头条</span>
          </div>
          <div class="item">
            <span>7</span>
            <span>关注</span>
          </div>
          <div class="item">
            <span>12</span>
            <span>粉丝</span>
          </div>
          <div class="item">
            <span>23</span>
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
      <div class="footer">
        退出登录
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
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
      padding: 80px 0;
      .mine-info {
        display: flex;
        align-items: center;
        .avatar {
          margin: 0 18px 0 40px;
        }
        .name {
          margin-right: 200px;
          font-size: 30px;
          color: #fff;
        }
        .info-btn {
          color: #646566 !important;
        }
      }
      .count-container {
        display: flex;
        margin-top: 20px;
        .item {
          flex: 1 0 0;
          font-size: 30px;
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
      padding: 100px 0;
      color: red;
      font-size: 30px;
    }
  }
}
</style>