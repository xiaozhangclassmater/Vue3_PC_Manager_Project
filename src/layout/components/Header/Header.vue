<template>
  <el-header class="header">
    <div class="ShowSidebar">
      <div class="icon">
        <el-icon :size="20">
          <Expand />
        </el-icon>
      </div>
      <div>
        <el-breadcrumb>
          <el-breadcrumb-item
            v-for="(item, index) in user.BreadList"
            :key="index"
            :to="{ path: '/' }"
          >
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="userInfo">
      <div class="name">
        {{ user.userinfo?.name }}
      </div>
      <div class="exitLogin">
        <el-dropdown>
          <span class="el-dropdown-link">
            菜单
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div @click="exitLogin">退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import useStore from "@/store";
import Cache from "@/utils/Cache";
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const { user } = useStore();
const Router = useRouter();
const exitLogin = async () => {
  const result = await ElMessageBox.confirm("你确定要退出登录吗?", "退出登录", {
    type: "warning"
  }).catch((e) => e);

  if (result === "cancel") return;
  user.ClearUserinfo();
  Cache.removeCache("token");
  Cache.removeCache("UserId");
  Router.push("/login");
};
</script>

<style scoped lang="less">
.el-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  padding-right: 45px;
  justify-content: space-between;
}
.userInfo {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  .name {
    padding-right: 15px;
  }
}
.ShowSidebar {
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 100%;
  width: 50%;
  .icon {
    margin-right: 15px;
  }
}
</style>
