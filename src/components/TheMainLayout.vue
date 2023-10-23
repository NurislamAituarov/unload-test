<template>
  <main class="main">
    <TheLeftSidebar />
    <TheRightContent />
  </main>
</template>

<script setup>
import TheLeftSidebar from "./TheLeftSidebar.vue";
import TheRightContent from "./TheRightContent.vue";
</script>

<style>
.main {
  display: flex;
  gap: 15px;
  padding: 20px;
}
</style>