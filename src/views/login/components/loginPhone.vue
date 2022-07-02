<template>
  <div class="PhoneLogin">
    <el-form ref="formRef" :model="Phone" :rules="PhoneRules" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input
          v-model.number="Phone.phoneNumber"
          placeholder="请输入手机号"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="验证码" prop="Code">
        <div class="getCode">
          <el-input
            v-model.number="Phone.Code"
            type="text"
            placeholder="请输入验证码"
            autocomplete="off"
          />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const Phone = reactive({ phoneNumber: "", Code: "" });
const PhoneRules = reactive({
  Code: [],
  phoneNumber: []
});
</script>

<style lang="less" scoped>
.PhoneLogin {
  padding: 5px 20px;
  .getCode {
    display: flex;
    button {
      margin-left: 17px;
    }
  }
  .el-form {
    width: 350px;
  }
}
</style>
