// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/product/goods",
  component: Main,
  children: [
    {
      path: "",
      component: () => import("@/views/product/goods/goods.vue"),
      name: "goods"
    }
  ]
};
