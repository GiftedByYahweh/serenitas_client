import { defineStore } from "pinia";
import { ref } from "vue";

export const useUISettingsStore = defineStore("uiSettings", () => {
  const THEME_LS_NAME = "lfjssdfjerdfas";
  const SIDEBAR_COLLAPSED = "knasdfsdfahfskfkb";

  const currentTheme = localStorage.getItem(THEME_LS_NAME) === "light" ? "light" : "dark";
  const currentSidebar = localStorage.getItem(SIDEBAR_COLLAPSED) === "true" ? true : false;

  const theme = ref(currentTheme);
  const sidebarState = ref(currentSidebar);

  const switchTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem(THEME_LS_NAME, theme.value);
  };

  const toggleSidebar = (state) => {
    sidebarState.value = state;
    localStorage.setItem(SIDEBAR_COLLAPSED, sidebarState.value);
  };

  return { theme, switchTheme, sidebarState, toggleSidebar };
});
