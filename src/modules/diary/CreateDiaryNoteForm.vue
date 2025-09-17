<script setup>
import { HelpCircleOutline } from "@vicons/ionicons5";
import { computed, ref } from "vue";

const title = ref("");
const content = ref("");
const isPrivate = ref(true);

const isDisabled = computed(() => {
  return !title.value || !content.value;
});
</script>

<template>
  <n-card>
    <n-form class="create-form">
      <n-h2 class="title m-b-10">Write new note</n-h2>
      <div>
        <n-h3 class="m-b-10">Note title</n-h3>
        <n-input v-model:value="title" placeholder="Note title" maxlength="100" show-count size="large"></n-input>
      </div>
      <div>
        <n-h3 class="m-b-10">Content</n-h3>
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
.textarea {
  min-height: 300px;
}
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #b4b4b4;
}
</style>
