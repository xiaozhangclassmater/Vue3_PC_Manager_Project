<template>
  <div class="loginPanel">
    <h1 class="title">云创后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" v-model="TabsValue" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="AccountRef"></loginAccount>
      </el-tab-pane>
      <el-tab-pane name="Phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhoneVue></loginPhoneVue>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <div class="account-btn">
      <el-button type="primary" @click="handelLogin">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Cellphone } from "@element-plus/icons-vue";
import { ref } from "vue";
import loginAccount from "./loginaccount.vue";
import loginPhoneVue from "./loginPhone.vue";
const isKeepPassword = ref(false);
const TabsValue = ref<string>("account");
const AccountRef = ref<InstanceType<typeof loginAccount>>();
const handelLogin = () => {
  if (TabsValue.value === "account") {
    AccountRef.value?.LoginAction();
  }
};
</script>

<style scoped lang="less">
.loginPanel {
  width: 440px;
  height: 350px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .account-btn {
    width: 100%;
    box-sizing: border-box;
    button {
      width: 100%;
    }
  }
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
