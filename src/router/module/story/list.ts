// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/story/list",
  component: Main,
  children: [
    {
      path: "",
      component: () => import("@/views/story/list/list.vue"),
      name: "list"
    }
  ]
};
