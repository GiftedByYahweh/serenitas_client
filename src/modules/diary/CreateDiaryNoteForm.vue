<script setup>
import { computed, ref } from "vue";

const title = ref("");
const content = ref("");
const isPrivate = ref(false);

const isDisabled = computed(() => {
  return !title.value || !content.value;
});
</script>

<template>
  <n-card>
    <n-form class="create-form">
      <div>
        <n-h3 class="inp-title">Note title</n-h3>
        <n-input v-model:value="title" placeholder="Note title" maxlength="100" show-count size="large"></n-input>
      </div>
      <div>
        <n-h3 class="inp-title">Content</n-h3>
        <n-input
          type="textarea"
          placeholder="Write your minds"
          v-model:value="content"
          maxlength="10000"
          show-count
          size="large"
          class="textarea"
        ></n-input>
      </div>
      <n-checkbox v-model:checked="isPrivate"> Make private </n-checkbox>
      <div class="flex j-between">
        <n-button type="error">Clear</n-button>
        <n-button type="primary" :disabled="isDisabled">Create note</n-button>
      </div>
    </n-form>
  </n-card>
</template>

<style scoped>
.create-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.inp-title {
  margin-bottom: 10px;
}
.textarea {
  min-height: 300px;
}
</style>
