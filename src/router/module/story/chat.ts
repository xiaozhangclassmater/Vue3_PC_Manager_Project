// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/story/chat",
  component: Main,
  children: [
    {
      path: "",
      component: () => import("@/views/story/chat/chat.vue"),
      name: "chat"
    }
  ]
};
