import { defineStore } from "pinia";
import { ref } from "vue";

export const useUISettingsStore = defineStore("uiSettings", () => {
  const THEME_LS_NAME = "lfjssdfjerdfas";

  const currentTheme = localStorage.getItem(THEME_LS_NAME) === "dark" ? "dark" : "light";

  const theme = ref(currentTheme);

  const switchTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem(THEME_LS_NAME, theme.value);
  };

  return { theme, switchTheme };
});
