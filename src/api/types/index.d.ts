interface AccountLogin {
  name: string;
  password: string;
}
interface LoginResult {
  id: number;
  token: string;
  name: string;
}

// 用户信息详情
interface UserDetail {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  createAt: Date;
  updateAt: Date;
  role: {
    createAt: Date;
    id: number;
    intro: string;
    name: string;
    updateAt: Date;
  };
}
// 用户能够访问的列表
interface UserMenus {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  children: unknown[];
}

type GoodsRes = {
  amount: string;
  amount: string;
  number1: number;
  number2: number;
  subtitle: string;
  tips: string;
  title: string;
}[];

export { AccountLogin, LoginResult, UserDetail, UserMenus, GoodsRes };
