<template>
  <div class="block">
    <div class="block-info">
      <div class="id">{{ unloadItem.id }}</div>
      <p>{{ orderStringWithoutTag(unloadItem.event) }}</p>
      <div class="close" @click="$emit('close-unload-item')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="12px"
          height="12px"
          fill="white"
        >
          <path
            d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
          />
        </svg>
      </div>
    </div>

    <div class="wrapper-download">
      <div class="clue">
        Если после клика на ссылку загрузка не пошла, проверьте не блокирует ли
        браузер скачивания архива
      </div>
      <div class="block-download">
        <p class="text-bold">Сылка для скачивания архива Выгрузки (.zip):</p>
        <a
          :href="`https://seenday.com/mL6OAHAEH1`"
          :download="`https://seenday.com/mL6OAHAEH1`"
          >{{ unloadItem.download_link }}</a
        >
        <span class="copy">скопировать ссылку</span>
      </div>
    </div>
  </div>
</template>


<script setup>
import { orderStringWithoutTag } from "@/lib/helpers";
import { defineEmits, defineProps } from "vue";
defineProps(["unloadItem"]);
defineEmits(["close-unload-item"]);
</script>

<style scoped lang="scss">
.block {
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  background-color: white;
  height: max-content;
  padding: 0;
}

.block-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: rgb(244 247 255);

  .id {
    padding: 10px 7px;
    color: white;
    background-color: #6a0dad;
  }
  .close {
    padding: 10px 7px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    cursor: pointer;
  }
}
.wrapper-download {
  padding: 10px;
}
.block-download {
  a {
    margin-right: 20px;
    text-decoration: none;
  }
  .copy {
    cursor: pointer;
    text-decoration: dashed;
    border-bottom: 1px dotted rgb(105, 105, 105);
  }
}
.clue {
  font-size: 12px;
}
</style>