export const getToken = (Token: string) => localStorage.getItem(Token);

export const setToken = (key: string, value: any) => localStorage.setItem(key, value);
