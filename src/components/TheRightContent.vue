<template>
  <TheNotice v-if="!showUnload" />
  <OrderExportInfo
    v-else
    @close-unload-item="closeUnloadItem"
    :unloadItem="unloadItem"
  />
</template>


<script setup>
import { inject, ref, watch } from "vue";
import OrderExportInfo from "./OrderExportInfo.vue";
import TheNotice from "./TheNotice.vue";

const showUnload = ref();
const unloadItem = inject("unloadItem");

function closeUnloadItem() {
  showUnload.value = null;
}

watch(unloadItem, () => {
  showUnload.value = true;
});
</script>
