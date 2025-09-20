<script setup>
import { computed, ref } from "vue";
import { RoutePaths } from "../../../router/routes";
import { apiClient } from "../../../api";
import { useMessage } from "naive-ui";
import { useAuthStore } from "../../../stores/auth";
import { useRouter } from "vue-router";

const message = useMessage();
const auth = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");

const isDisabled = computed(() => {
  return !email.value || !password.value;
});

const onLogin = async () => {
  const res = await apiClient.auth.login({ email: email.value, password: password.value });
  if (!res.data) {
    return message.error(res.message, {
      duration: 5000,
      placement: "top-left",
    });
  }
  auth.onLogin();
  router.push(RoutePaths.main);
};
</script>

<template>
  <n-form class="flex col g-20">
    <n-space justify="space-between">
      <div>
        <n-h2 class="m-0">Serenitas</n-h2>
        <n-p class="m-0">Sign in to your serenitas</n-p>
      </div>
      <n-h1 class="m-0">🍀</n-h1>
    </n-space>
    <n-input v-model:value="email" size="large" autocomplete="email" placeholder="Email"></n-input>
    <n-input
      v-model:value="password"
      size="large"
      type="password"
      show-password-on="mousedown"
      placeholder="Password"
    />
    <div>
      <n-p>
        <router-link :to="RoutePaths.registration.path">
          <n-text type="primary" strong>Forgot password?</n-text>
        </router-link>
      </n-p>
      <n-button size="large" type="success" class="w-full" attr-type="submit" :disabled="isDisabled" @click="onLogin">
        Sign In
      </n-button>
      <n-p align="center">
        Don't have an account?
        <router-link :to="RoutePaths.registration.path">
          <n-text type="primary" strong>Sign up</n-text>
        </router-link>
      </n-p>
    </div>
  </n-form>
</template>
