// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/user",
  component: Main,
  meta: { title: "系统管理" },
  children: [
    {
      path: "",
      name: "user",
      component: () => import("@/views/system/user/user.vue"),
      meta: { title: "用户管理" }
    }
  ]
};
