<template>
  <div class="login">
    <!-- nav -->
    <van-nav-bar class="page-nav" title="登录" /> 
    <!-- form -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field  :rules="rules.username" left-icon="manager" v-model="userInfo.username" name="username" placeholder="请输入用户名" />
        <van-field :rules="rules.password" left-icon="lock" v-model="userInfo.password" type="password" name="password" placeholder="请输入密码" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button block type="primary"  native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { login } from "@/axios/login";
/* 用户信息相关逻辑 */
const toast = (getCurrentInstance() as any).appContext.config.globalProperties.$toast;
const userInfo = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [{ message: '请输入用户名', required: true }],
  password: [{ message: '请输入密码', required: true }, { pattern: /^\d{6}/, message: '请输入正确的密码' }]
});
async function onSubmit(values: { username: string, password: string }) {
  toast.loading({
    message: '登陆中...',
    forbidClick: true,
    duration: 0,
  });
  interface DataType {
    [property: string]: number | string | object[]
  }
  let data: DataType;
  try {
    data = <DataType><any>await login(values)
  } catch (error) {
    return
  }
  if (data.code === 0) {
    toast.success(data.msg);
  } else {
    toast.fail(data.msg);
  }

}
</script> 

<style lang="scss" scoped>

</style>