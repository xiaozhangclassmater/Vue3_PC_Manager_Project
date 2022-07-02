import { request } from "@/utils/request";
import { UserDetail } from "../types";
export function getUserInfo(id: number) {
  return request<ResponseData<UserDetail>>({
    url: "/users/" + id
  });
}
