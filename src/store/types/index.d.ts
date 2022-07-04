// 用户模块 vuex状态
export interface userState {
  userinfo: {
    Menus: Array;
    cellphone: number;
    id: number;
    name: string;
    realname: string;
    cellphone: number;
    enable: number;
    createAt: Date;
    updateAt: Date;
  } | null;
  token: string;
  userId: number;
  BreadList: {
    meta: {
      title: string;
    };
    path: string;
    name: string;
  }[];
}
