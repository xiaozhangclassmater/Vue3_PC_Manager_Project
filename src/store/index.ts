import { useUserStore } from "./module/user";

const useStore = () => {
  return {
    user: useUserStore()
  };
};
export default useStore;
