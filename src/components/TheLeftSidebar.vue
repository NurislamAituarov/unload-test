<template>
  <div class="left-sidebar">
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
.left-sidebar {
  min-width: 35vw;
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 768px) {
  .left-sidebar {
    min-width: 100%;
  }
}
</style>
