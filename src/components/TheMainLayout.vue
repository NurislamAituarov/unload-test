<template>
  <main class="main">
    <UnloadBlockMain
      :title="'Выгрузка'"
      :subtitle="'Выполняет работу'"
      :actionLists="[
        'Собирает фотографии из заказов пользователей.',
        'Выгружает по папкам',
      ]"
    />

    <TheRightContent />

    <TheLeftSidebar @open-onload-item="openUnloadItem" />
  </main>
</template>

<script setup>
import { provide, ref } from "vue";
import TheLeftSidebar from "./TheLeftSidebar.vue";
import TheRightContent from "./TheRightContent.vue";
import { useAPIFetch } from "@/api/methods";
import UnloadBlockMain from "./UnloadBlockMain.vue";

const unloadItem = ref();

const openUnloadItem = async (id) => {
  const res = await useAPIFetch.getUnloadItem(id);
  unloadItem.value = res.data.response.data[0];
};

provide("unloadItem", unloadItem);
</script>

<style lang="scss">
@import "../assets/mediaScreen.scss";

.main {
  display: grid;
  grid-template-columns: 35vw 1fr;
  gap: 15px;
  padding: 20px;
  @include respond-to(xslg) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
}
</style> 