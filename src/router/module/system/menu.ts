// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/menu",
  component: Main,
  meta: { title: "系统管理" },
  children: [
    {
      path: "",
      meta: { title: "菜单管理" },
      component: () => import("@/views/system/menu/menu.vue"),
      name: "menu"
    }
  ]
};
