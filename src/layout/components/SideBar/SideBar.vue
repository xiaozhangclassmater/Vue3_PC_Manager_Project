<template>
  <el-aside width="200px">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
      <div>云创后台</div>
    </div>
    <el-menu
      router
      :default-active="Route.path"
      :unique-opened="false"
      background-color="#2879ff"
      active-text-color="#4fa6ff"
      text-color="#fff"
      :collapse-transition="false"
      class="el-menu-vertical-demo"
    >
      <template v-for="item in user.userinfo?.Menus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="itemChild in item.children" :key="itemChild.id">
              <el-menu-item :index="itemChild.url">{{ itemChild.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id">{{ item.name }}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import useStore from "@/store";
import { watch } from "vue";
import { useRoute } from "vue-router";
const Route = useRoute();
const { user } = useStore();
watch(
  () => Route.fullPath,
  () => {
    user.UpdateBreadList(Route.matched);
    // 方法二 手动过率
    // const Children: any = result.filter((item: any) => item.url === Route.path);
    // const Parent: any = result.find((item: any) => item.id === Children[0]?.parentId);
    // user.BreadList = [];
    // user.BreadList.push(Parent);
    // user.BreadList.push(...Children);
  },
  { immediate: true }
);
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  height: 50px;
  padding: 15px 10px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
    margin-right: 5px;
  }
}
.el-menu-vertical-demo {
  user-select: none;
  width: 200px;
}
.is-active {
  background-color: #ecf5ff;
}

.el-aside {
  .el-menu {
    .el-sub-menu {
      width: 200px;
    }
    .el-menu-item:hover {
      background-color: #ecf5ff;
      color: #4fa6ff;
    }
  }
}
</style>
