<template>
  <div class="unload-container">
    <div class="block block-main">
      <h2 class="text-bold">Выгрузка</h2>
      <p class="text-bold subtitle">Выполняет работу:</p>
      <span> - Собирает фотографии из заказов пользователей. </span>
      <span> - Выгружает по папкам</span>
    </div>

    <UnloadBlock
      v-for="item of unloadItems"
      :key="item.id"
      :item="item"
      @click="$emit('open-onload-item', item.id)"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";
import UnloadBlock from "./UnloadItem.vue";
import { useAPIFetch } from "@/api/methods";

defineEmits(["open-onload-item"]);

const unloadItems = ref();

onMounted(async () => {
  const res = await useAPIFetch.getUnloadAll();
  unloadItems.value = res.data.response.data;
});
</script>


<style scoped lang="scss">
.block-main {
  span {
    display: block;
  }
}
.subtitle {
  font-size: 16px;
}
.unload-container {
  width: 35vw;
  display: flex;
  flex-direction: column;
}
</style>
