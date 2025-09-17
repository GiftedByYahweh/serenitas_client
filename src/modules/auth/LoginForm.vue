<script setup>
import { computed, ref } from "vue";

const email = ref("");
const password = ref("");

const isDisabled = computed(() => {
  return !email.value || !password.value;
});
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
      :minlength="6"
      :maxlength="16"
    />
    <div>
      <n-button size="large" type="success" class="w-full" attr-type="submit" :disabled="isDisabled">
        Sign In
      </n-button>
      <n-p align="center">Don't have an account? Sign up</n-p>
    </div>
  </n-form>
</template>
