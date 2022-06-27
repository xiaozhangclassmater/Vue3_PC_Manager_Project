import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuex from "@/store";

const app = createApp(App);
app.use(vuex);
app.use(router);
app.mount("#app");
