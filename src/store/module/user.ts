import type { AccountLogin } from "@/api/types";
import { PostToken } from "@/api/login";
import { getUserInfo } from "@/api/user";
import { getMenuList } from "@/api/menus";
import Cache from "@/utils/Cache";
import { userState } from "../types";
import { defineStore } from "pinia";

export const useUserStore = defineStore("User", {
  state: (): userState => ({
    token: Cache.getCache("token") || "",
    userId: Cache.getCache("UserId") || 0,
    userinfo: null
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
    }
  }
});
