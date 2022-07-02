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
    component: () => import("@/views/main/main.vue"),
    children: [
      {
        path: "analysis/dashboard",
        name: "dashboard",
        component: () => import("@/views/analysis/dashboard/dashboard.vue"),
        meta: { title: "主页", icon: "dashboard" }
      }
    ]
  }
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/404"
  // }
];
// const asyncRoutes = asyncRoutes;
console.log([...routes, ...asyncRoutes]);
const router = createRouter({
  routes: [...routes, ...asyncRoutes],
  history: createWebHashHistory()
});

export default router;

// "/main/analysis/overview"
//  "/main/analysis/dashboard"
//  "/main/analysis"
//  "/main/system/user"
//  "/main/system/department"
//  "/main/system/menu"
//  "/main/system/role"
//  "/main/system"
//  "/main/product/category"
//  "/main/product/goods"
//  "/main/product"
//  "/main/story/chat"
//  "/main/story/list"
//  "/main/story"
