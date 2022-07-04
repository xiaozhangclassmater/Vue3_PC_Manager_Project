// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/department",
  component: Main,
  meta: { title: "系统管理" },
  children: [
    {
      path: "",
      meta: { title: "部门管理" },
      component: () => import("@/views/system/department/department.vue"),
      name: "department"
    }
  ]
};
