<template>
  <main class="main">
    <TheLeftSidebar @open-onload-item="openUnloadItem" />
    <TheRightContent />
  </main>
</template>

<script setup>
import { provide, ref } from "vue";
import TheLeftSidebar from "./TheLeftSidebar.vue";
import TheRightContent from "./TheRightContent.vue";
import { useAPIFetch } from "@/api/methods";

const unloadItem = ref();

const openUnloadItem = async (id) => {
  const res = await useAPIFetch.getUnloadItem(id);
  unloadItem.value = res.data.response.data[0];
};

provide("unloadItem", unloadItem);
</script>

<style>
.main {
  display: flex;
  gap: 15px;
  padding: 20px;
}
</style>