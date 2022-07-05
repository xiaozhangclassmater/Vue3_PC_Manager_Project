<template>
  <div class="BaseCharts">
    <div id="pie"></div>
  </div>
</template>
<script lang="ts">
export default {
  name: "BaseEcharts"
};
</script>
<script lang="ts" setup>
import { EChartsConfig } from "@/types";
import { defineProps, withDefaults } from "vue";
const props = withDefaults(defineProps<EChartsConfig>(), {
  width: "100%",
  height: "360px"
});
console.log(props.width);
// const Props = withDefaults(, {
//   width: "100%",
//   height: "360px"
// });
</script>

<style scoped></style>
