<template>
  <div class="loginaccount">
    <el-form ref="FormRef" :model="Account" status-icon :rules="FormRules" class="demo-ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="Account.name" type="text" autocomplete="off" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="Account.password"
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import useStore from "@/store";
import { Not_empty_Check } from "@/utils/MathRules";
import { ElForm, ElMessage } from "element-plus";
import { defineExpose, reactive, ref } from "vue";
import { useRouter } from "vue-router";

// hook
const { user } = useStore();
const Router = useRouter();
const Account = reactive({ name: "coderwhy", password: "123456" });
const FormRules = reactive({
  name: [Not_empty_Check(true, "账号不能为空", "blur")],
  password: [Not_empty_Check(true, "密码不能为空", "blur")]
});
const FormRef = ref<InstanceType<typeof ElForm>>();

const LoginAction = async () => {
  const result = await FormRef.value?.validate().catch(() => false);
  if (!result) return;
  try {
    await user.Userlogin(Account);
    ElMessage.success("登录成功");
    Router.push("/layout");
  } catch (e) {}
};

defineExpose({
  LoginAction
});
</script>
<style scoped lang="less">
.loginaccount {
  box-sizing: border-box;
  padding: 5px 20px;
  .el-form {
    width: 350px;
  }
}
</style>
