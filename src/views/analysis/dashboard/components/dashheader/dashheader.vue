<template>
  <div class="dashboard-header">
    <div class="GoodsCounter" v-for="item in GoodsCountList" :key="item.amount">
      <div class="Hitems">
        <div class="CounterNumber">{{ item.title }}</div>
        <div class="Icon">
          <el-icon>
            <More />
          </el-icon>
        </div>
      </div>
      <div class="Number">
        <CountUp :number="item.number1" :amount="item.amount"> </CountUp>
      </div>
      <div class="NumberText">
        <CountUp :number="item.number2" :amount="item.amount"> </CountUp>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getProductCounts } from "@/api/dahsboard";
import { GoodsRes } from "@/api/types";
import { ref } from "vue";
import CountUp from "../CountUp/CountUp.vue";
const GoodsCountList = ref<GoodsRes>();

const LoadProductCounts = async () => {
  const CountList = await getProductCounts();
  GoodsCountList.value = CountList.data;
};

LoadProductCounts();
</script>

<style scoped lang="less">
.dashboard-header {
  display: flex;
  width: 100%;

  .GoodsCounter {
    width: 25%;
    padding: 10px 20px;
    box-sizing: border-box;

    .Hitems {
      display: flex;
      line-height: 25px;
      justify-content: space-between;

      .CounterNumber {
        font-size: 13px;
        color: #b6b6b8;
      }
    }

    .Number {
      font-size: 25px;
      line-height: 50px;
    }

    .NumberText {
      border-top: 1px solid #f7f7f7;
      line-height: 30px;
      font-size: 13px;
    }
  }
}
</style>
