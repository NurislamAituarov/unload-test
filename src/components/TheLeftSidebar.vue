<template>
  <div class="unload-container">
    <div class="block">
      <h2 class="text-bold">Выгрузка</h2>
      <p class="text-bold">Выполняет работу:</p>
      <span> - Собирает фотографии из заказов пользователей. </span>
      <span> - Выгружает по папкам</span>
    </div>

    <UnloadBlock v-for="item of unloadItems" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import UnloadBlock from "./UnloadItem.vue";

const unloadItems = ref();

onMounted(() => {
  useAPIFetch();
});

function useAPIFetch() {
  const apiUrl =
    "https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get";

  // Вы можете использовать Axios или Fetch API
  axios
    .get(apiUrl)
    .then((response) => {
      unloadItems.value = response.data.response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
</script>


<style scoped lang="scss">
.unload-container {
  width: 35vw;
  display: flex;
  flex-direction: column;
}
</style>
