import { PostToken } from "@/api/login";
import { getMenuList } from "@/api/menus";
import type { AccountLogin } from "@/api/types";
import { getUserInfo } from "@/api/user";
import Cache from "@/utils/Cache";
import { defineStore } from "pinia";
import { userState } from "../types";

export const useUserStore = defineStore("User", {
  state: (): userState => ({
    token: Cache.getCache("token") || "",
    userId: Cache.getCache("UserId") || -1,
    userinfo: null,
    // 面包屑数组
    BreadList: []
  }),
  actions: {
    async Userlogin(payload: AccountLogin) {
      const res = await PostToken(payload);
      // token 存储
      this.token = res.data.token;
      this.userId = res.data.id;
      Cache.setCache("UserId", res.data.id);
      Cache.setCache("token", res.data.token);
    },
    async getUserProfile() {
      // 根据id 获取数据
      const Userinfo = await getUserInfo(this.userId);
      // 获取左侧菜单数据
      const Menus = await getMenuList(Userinfo.data.role.id);
      this.userinfo = { ...Userinfo.data, Menus: Menus.data };
      return { ...Userinfo.data, Menus };
    },
    ClearUserinfo() {
      this.token = "";
      // 重置 数据
      this.userId = -1;
      this.userinfo = null;
    },
    UpdateBreadList(payload: any) {
      this.BreadList = payload;
    }
  }
});
