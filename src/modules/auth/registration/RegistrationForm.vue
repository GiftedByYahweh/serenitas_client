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

const username = ref("");
const email = ref("");
const password = ref("");

const isDisabled = computed(() => {
  return !email.value || !password.value || !username.value;
});

const onRegistration = async () => {
  const payload = { username: username.value, email: email.value, password: password.value };
  const res = await apiClient.auth.registration(payload);
  if (!res.data) {
    return message.error(res.message);
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
        <n-p class="m-0">Create your account and start managing Serenitas</n-p>
      </div>
      <n-h1 class="m-0">🍀</n-h1>
    </n-space>
    <n-input v-model:value="username" size="large" type="text" placeholder="Username"></n-input>
    <n-input
      v-model:value="email"
      size="large"
      type="email"
      pattern=".+@.+"
      autocomplete="email"
      placeholder="Email"
    ></n-input>
    <n-input
      v-model:value="password"
      size="large"
      type="password"
      show-password-on="mousedown"
      placeholder="Password"
      :minlength="4"
      :maxlength="16"
    />
    <div>
      <n-button
        size="large"
        type="success"
        class="w-full"
        attr-type="submit"
        :disabled="isDisabled"
        @click="onRegistration"
      >
        Sign Up
      </n-button>
      <n-p align="center">
        Already have an account?
        <router-link :to="RoutePaths.login.path">
          <n-text type="primary" strong>Sign in</n-text>
        </router-link>
      </n-p>
    </div>
  </n-form>
</template>
