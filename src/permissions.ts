import router from "./router";
import useStore from "@/store";
import Nprogress from "nprogress";
import "nprogress/nprogress.css"; // progress bar style
const whiteList = ["/login", "/404"];

router.beforeEach(async (to, from, next) => {
  Nprogress.start();
  const { user } = useStore();
  if (!user.token) {
    // 没有token
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  } else {
    // 有token
    if (!user.userinfo) {
      // 如果没有用户信息数据 重新发送网络请求
      await user.getUserProfile();
    }
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  Nprogress.done();
});
