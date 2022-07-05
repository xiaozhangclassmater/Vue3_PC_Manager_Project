import { App } from "vue";
import BaseEcharts from "./BaseEcharts/BaseEcharts.vue";

export default {
  install(app: App) {
    app.component(BaseEcharts.name, BaseEcharts);
  }
};
