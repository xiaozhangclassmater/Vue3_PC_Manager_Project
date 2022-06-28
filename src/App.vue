<template>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <router-view></router-view>
  <el-button type="primary">111</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {}
});
</script>

<style lang="less"></style>
