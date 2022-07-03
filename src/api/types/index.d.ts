interface AccountLogin {
  name: string;
  password: string;
}
interface LoginResult {
  id: number;
  token: string;
  name: string;
}

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

interface UserMenus {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  children: unknown[];
}
export { AccountLogin, LoginResult, UserDetail, UserMenus };
