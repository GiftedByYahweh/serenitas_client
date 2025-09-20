<script setup lang="ts">
import { onMounted } from "vue";
import AppHeader from "./AppHeader.vue";
import AppSidebar from "./AppSidebar.vue";
import { apiClient } from "../../api";
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";
import { RoutePaths } from "../../router/routes";
import { useAccountStore } from "../../stores/account";

const router = useRouter();
const auth = useAuthStore();
const account = useAccountStore();

onMounted(async () => {
  const accout = await apiClient.account.getAccountInfo();
  if (!accout.data) {
    auth.onLogout();
    router.push(RoutePaths.login);
    return;
  }
  return account.setAccount(account.data);
});
</script>

<template>
  <n-layout has-sider class="application-layout">
    <AppSidebar />
    <n-layout>
      <AppHeader />
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style>
.application-layout {
  height: 100vh;
}
</style>
