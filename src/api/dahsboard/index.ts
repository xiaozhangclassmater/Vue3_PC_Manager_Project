import { request } from "@/utils/request";
import { GoodsRes } from "../types";
export function getProductCounts() {
  return request<ResponseData<GoodsRes>>({
    url: "/goods/amount/list",
    method: "get"
  });
}
