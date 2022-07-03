import { RouteRecordRaw } from "vue-router";

const MapMenusToRoutes = (): RouteRecordRaw[] => {
  // 获得路由对象的 数组

  const allRoutes: RouteRecordRaw[] = [];

  const routeFiles = require.context("../router/module", true, /\.ts$/);

  routeFiles.keys().forEach((key) => {
    const route = require("../router/module" + key.slice(1));
    allRoutes.push(route.default);
  });
  return allRoutes;
};
// const PublicRoutes: object[] = MapMenusToRoutes();

// const CreateUserPmsRoutes = (PublicRoutes: object[], UserinPermission: object[]) => {
//   const routes: RouteRecordRaw[] = [];
// };

// CreateUserPmsRoutes(PublicRoutes, []);

export default MapMenusToRoutes;
