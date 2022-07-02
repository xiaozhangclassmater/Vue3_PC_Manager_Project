// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/user",
  component: Main,
  children: [
    {
      path: "",
      name: "user",
      component: () => import("@/views/system/user/user.vue"),
      meta: { title: "user", icon: "user" }
    }
  ]
};
