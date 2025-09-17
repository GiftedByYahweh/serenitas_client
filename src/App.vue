<script setup>
import { ApplicationLayout } from "./layouts/application";
import { useUISettingsStore } from "./stores/uiSettings";
import { darkTheme, lightTheme } from "naive-ui";

const uiSettingsStore = useUISettingsStore();

const themeList = {
  dark: darkTheme,
  light: lightTheme,
};
</script>

<template>
  <n-config-provider :theme="themeList[uiSettingsStore.theme]">
    <ApplicationLayout />
  </n-config-provider>
</template>

<style></style>
