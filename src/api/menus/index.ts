import { request } from "@/utils/request";
import { UserMenus } from "../types/index.d";

export function getMenuList(id: number) {
  return request<ResponseData<UserMenus>>({
    url: "/role/" + id + "/menu"
  });
}
