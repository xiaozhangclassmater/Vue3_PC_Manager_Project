import { useUserStore } from "./module/user";

const useStore = () => ({
  user: useUserStore()
});

export default useStore;
