<script setup>
import { computed } from "vue";
import { useUISettingsStore } from "../../stores/uiSettings";
import { Sunny, Moon, LogOutOutline } from "@vicons/ionicons5";

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
        <n-icon class="pointer" :size="30" v-else color="#949494" @click="uiSettingsStore.switchTheme">
          <Sunny />
        </n-icon>
      </template>
      Change theme
    </n-tooltip>
  </div>
</template>
