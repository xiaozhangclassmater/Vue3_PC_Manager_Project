// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/product/category",
  component: Main,
  meta: { title: "商品中心" },
  children: [
    {
      path: "",
      component: () => import("@/views/product/category/category.vue"),
      name: "category",
      meta: { title: "商品类别" }
    }
  ]
};
