// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/role",
  component: Main,
  meta: { title: "系统管理" },
  children: [
    {
      path: "",
      name: "role",
      meta: { title: "角色管理" },
      component: () => import("@/views/system/role/role.vue")
    }
  ]
};
