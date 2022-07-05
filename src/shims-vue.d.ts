/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;



}
declare module 'nprogress'
 interface ResponseData<T = any>{
  code:number,
  data:T
}

 interface EChartsConfig {
  width: string,
  height: string
}
