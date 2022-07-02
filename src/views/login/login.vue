<template>
  <div class="login">
    <loginPanel></loginPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import loginPanel from "./components/loginPanel.vue";
export default defineComponent({
  name: "Login",
  components: {
    loginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login-bg.svg");
}
</style>
