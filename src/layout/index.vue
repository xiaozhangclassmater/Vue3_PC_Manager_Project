<template>
  <div class="Layout-container">
    <el-container>
      <!-- 左侧导航栏 -->
      <SideBar />
      <el-container>
        <div class="MainLayout">
          <Header></Header>
          <AppMain></AppMain>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/SideBar/SideBar.vue";
import Header from "./components/Header/Header.vue";
import AppMain from "./components/AppMain/AppMain.vue";
</script>

<style lang="less" scoped>
.Layout-container {
  height: 100%;
  background-color: #f6f8fc;
  .el-container {
    height: 100%;
    .el-aside {
      background-color: #2879ff;
      color: #fff;
    }
    .MainLayout {
      width: 100%;
    }
  }
}
</style>
