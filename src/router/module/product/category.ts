// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/product/category",
  component: Main,
  children: [
    {
      path: "",
      component: () => import("@/views/product/category/category.vue"),
      name: "category"
    }
  ]
};
