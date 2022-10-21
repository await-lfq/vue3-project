<template>
  <div class="login">
    <!-- nav -->
    <van-nav-bar class="page-nav" title="登录" />
    <!-- form -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field  :rules="rules.username" left-icon="manager" v-model="userInfo.username" name="用户名" placeholder="请输入用户名" />
        <van-field :rules="rules.password" left-icon="lock" v-model="userInfo.password" type="password" name="密码" placeholder="请输入密码" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button block type="primary"  native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
/* 用户信息相关逻辑 */
const userInfo = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [{ message: '请输入用户名', required: true }],
  password: [{ message: '请输入密码', required: true }, { pattern: /^\d{6}/, message: '请输入正确的密码' }]
});
function onSubmit() {
  alert("提交信息")

}
</script>

<style lang="scss" scoped>

</style>