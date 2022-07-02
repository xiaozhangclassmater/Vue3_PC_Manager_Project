// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/system/department",
  component: Main,
  children: [
    {
      path: "",
      component: () => import("@/views/system/department/department.vue"),
      name: "department"
    }
  ]
};
