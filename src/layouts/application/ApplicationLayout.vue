<script setup lang="ts">
import { DiaryPage } from "../../modules/diary";
import AppHeader from "./AppHeader.vue";
import AppSidebar from "./AppSidebar.vue";
</script>

<template>
  <n-layout has-sider class="application-layout">
    <AppSidebar />
    <n-layout>
      <AppHeader />
      <n-layout-content content-style="padding: 24px;">
        <DiaryPage />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style>
.application-layout {
  height: 100vh;
}
</style>
