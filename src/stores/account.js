import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccountStore = defineStore("account", () => {
  const account = ref(null);

  const setAccount = () => {
    isAuth.value = true;
  };

  return {
    account,
    setAccount,
  };
});
