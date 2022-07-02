import { request } from "@/utils/request";
import { AccountLogin, LoginResult } from "../types";
export const PostToken = (data: AccountLogin) => {
  return request<ResponseData<LoginResult>>({
    url: "/login",
    method: "post",
    data
  });
};
