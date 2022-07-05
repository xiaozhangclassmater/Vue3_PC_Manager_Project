import * as echarts from "echarts";
function EchartInit(el: HTMLElement) {
  // 初始化节点
  const EchartsInstance = echarts.init(el);

  const SetOptions = (options: echarts.EChartsOption) => {
    EchartsInstance.setOption(options);
  };
  return {
    EchartsInstance,
    SetOptions
  };
}

export default EchartInit;
