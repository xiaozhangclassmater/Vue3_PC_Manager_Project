import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import asyncRoutes from "./module";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main/analysis/dashboard"
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  { path: "/404", component: () => import("@/views/404/404.vue") },
  {
    path: "/main",
    redirect: "/main/analysis/dashboard",
    name: "main",
    meta: { title: "系统总览" },
    component: () => import("@/views/main/main.vue"),
    children: [
      {
        path: "analysis/dashboard",
        name: "dashboard",
        component: () => import("@/views/analysis/dashboard/dashboard.vue"),
        meta: { title: "商品统计" }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
];
const router = createRouter({
  routes: [...routes, ...asyncRoutes],
  history: createWebHashHistory()
});

export default router;
