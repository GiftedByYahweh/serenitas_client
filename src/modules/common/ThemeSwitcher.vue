<script setup>
import { computed } from "vue";
import { useUISettingsStore } from "../../stores/uiSettings";
import { SunnyOutline, Moon } from "@vicons/ionicons5";

const uiSettingsStore = useUISettingsStore();

const isThemeDark = computed(() => uiSettingsStore.theme === "dark");
</script>

<template>
  <div class="flex i-center g-8">
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-icon class="pointer" :size="30" v-if="isThemeDark" @click="uiSettingsStore.switchTheme">
          <Moon />
        </n-icon>
        <n-icon class="pointer" :size="30" v-else @click="uiSettingsStore.switchTheme">
          <SunnyOutline />
        </n-icon>
      </template>
      Change theme
    </n-tooltip>
  </div>
</template>
