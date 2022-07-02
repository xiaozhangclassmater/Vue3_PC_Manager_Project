import Main from "@/views/main/main.vue";

export default {
  path: "/main/analysis/overview",
  component: Main,
  children: [
    {
      path: "",
      name: "overview",
      component: () => import("@/views/analysis/overview/overview.vue"),
      meta: { title: "overview", icon: "overview" },
      alias: "/test.html"
    }
  ]
};
