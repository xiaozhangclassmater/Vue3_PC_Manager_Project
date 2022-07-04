import Main from "@/views/main/main.vue";

export default {
  path: "/main/analysis/overview",
  component: Main,
  meta: { title: "系统总览" },
  children: [
    {
      path: "",
      name: "overview",
      component: () => import("@/views/analysis/overview/overview.vue"),
      meta: { title: "核心技术" },
      alias: "/test.html"
    }
  ]
};
