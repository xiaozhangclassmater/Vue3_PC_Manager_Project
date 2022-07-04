<template>
  <span ref="counterRef" />
</template>

<script lang="ts" setup>
import type { CountUpOptions } from "countup.js";
// http://inorganik.github.io/countUp.js/
import { CountUp } from "countup.js";
import { defineProps, onMounted, ref, watch } from "vue";
const props = defineProps<{
  number: number;
  amount?: string;
}>();
const defaultOptions: CountUpOptions = {
  decimalPlaces: 0, // 保留两位
  duration: 2, // 动画时长
  separator: ",", // 千位分割
  decimal: ".", // 小数分割
  prefix: props.amount === "saleroom" ? "￥" : "" // 单位
};
const counterRef = ref<HTMLDivElement | null>(null);
const instance = ref<CountUp | null>(null);

watch(
  () => props.number,
  () => {
    update(props.number);
  }
);
onMounted(() => {
  createCounter();
});

const createCounter = () => {
  if (!counterRef.value) return;
  const opts: CountUpOptions = Object.assign(defaultOptions);
  instance.value = new CountUp(counterRef?.value, props.number, opts);
  start();
};

const start = () => {
  if (!instance.value) return;
  instance?.value.start();
};
const update = (number: number) => {
  if (!instance.value) return;
  instance?.value.update(number);
};
</script>

<style scoped lang="less"></style>
