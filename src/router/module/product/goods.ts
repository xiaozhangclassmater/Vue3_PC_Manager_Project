// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/product/goods",
  component: Main,
  meta: { title: "商品中心" },
  children: [
    {
      path: "",
      component: () => import("@/views/product/goods/goods.vue"),
      name: "goods",
      meta: { title: "商品信息" }
    }
  ]
};
