// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/menu",
  component: Main,
  children: [
    {
      path: "",
      component: () => import("@/views/system/menu/menu.vue"),
      name: "menu"
    }
  ]
};
