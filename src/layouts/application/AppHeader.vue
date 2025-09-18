<script setup>
import { LogOutOutline, PencilOutline } from "@vicons/ionicons5";
import ThemeSwitcher from "../../modules/common/ThemeSwitcher.vue";
</script>

<template>
  <n-layout-header bordered class="header flex g-24 j-end">
    <ThemeSwitcher />
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-icon class="pointer" :size="30">
          <LogOutOutline />
        </n-icon>
      </template>
      Sign out
    </n-tooltip>
    <n-icon class="pointer" :size="30">
      <PencilOutline />
    </n-icon>
  </n-layout-header>
</template>

<style>
.header {
  padding: 12px;
}
</style>
