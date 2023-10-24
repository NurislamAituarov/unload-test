<template>
  <div class="block block-main">
    <h2 class="text-bold">{{ title }}</h2>
    <p class="text-bold subtitle">{{ subtitle }}:</p>
    <span v-for="(list, ind) of actionLists" :key="list + ind">
      - {{ list }}
    </span>
  </div>
</template>


<script setup>
import { defineProps } from "vue";

defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  actionLists: { type: Array, default: () => [] },
});
</script>

<style scoped lang="scss">
.block-main {
  height: min-content;
  .subtitle {
    font-size: 16px;
  }
  span {
    display: block;
  }
}
</style>