<script setup>
import { useRoute } from "vue-router";
import { useUISettingsStore } from "./stores/uiSettings";
import { darkTheme, lightTheme } from "naive-ui";
import { computed } from "vue";
import { DefaultLayout } from "./layouts/default";
import { ApplicationLayout } from "./layouts/application";

const uiSettingsStore = useUISettingsStore();
const route = useRoute();
const layouts = { default: DefaultLayout, application: ApplicationLayout };

const themeList = {
  dark: darkTheme,
  light: lightTheme,
};

const currentLayout = computed(() => {
  const key = route.meta.layout || "default";
  return layouts[key] ?? layouts.default;
});
</script>

<template>
  <n-config-provider :theme="themeList[uiSettingsStore.theme]">
    <n-message-provider>
      <component :is="currentLayout">
        <router-view />
      </component>
    </n-message-provider>
  </n-config-provider>
</template>
