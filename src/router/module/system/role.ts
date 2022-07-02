// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/role",
  component: Main,
  children: [
    {
      path: "",
      name: "role",
      component: () => import("@/views/system/role/role.vue")
    }
  ]
};
