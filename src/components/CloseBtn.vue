<template>
  <div class="close">
    <CloseIcon v-if="!text" />

    <p v-else>{{ text }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import CloseIcon from "./svg/CloseIcon.vue";

defineProps({
  text: { type: String, default: "" },
});
</script>


<style>
.close {
  padding: 10px 7px;
  background-color: var(--color_danger);
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  cursor: pointer;
  color: white;
}
</style>