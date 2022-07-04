// const Main = () => import("@/views/main/main.vue");
import Main from "@/views/main/main.vue";
export default {
  path: "/main/story/chat",
  component: Main,
  meta: { title: "随便聊聊" },
  children: [
    {
      path: "",
      meta: { title: "你的故事" },
      component: () => import("@/views/story/chat/chat.vue"),
      name: "chat"
    }
  ]
};
