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
import { reactive } from "vue";
import { useStore } from "vuex";
import { login } from "@/axios/login";
import { showSuccess, showLoading, showFail } from "@/utils/tools";
import { useRouter } from "vue-router"
const store = useStore(); // store
const router = useRouter(); // router
// 登录信息
const userInfo = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [{ message: '请输入用户名', required: true }],
  password: [{ message: '请输入密码', required: true }, { pattern: /^\d{6}/, message: '请输入正确的密码' }]
});
// 登录
async function onSubmit(values: { username: string, password: string }) {
  showLoading("登陆中...")
  interface DataType {
    [property: string]: number | string | object
  }
  let data: DataType;
  try {
    data = <DataType><any>await login(values)
  } catch (error) {
    return
  }
  if (data.code === 0) {
    showSuccess(data.msg as string);
    store.commit("setUserinfo", data.data);
    router.push("/home");
  } else {
    showFail(data.msg as string);
  }

}
</script> 

<style lang="scss" scoped>

</style>