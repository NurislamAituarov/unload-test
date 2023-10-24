<template>
  <div class="block">
    <div class="block-info">
      <div class="id">{{ unloadItem.id }}</div>
      <p>{{ orderStringWithoutTag(unloadItem.event) }}</p>
      <CloseBtn @click="$emit('close-unload-item')" />
    </div>

    <div class="wrapper-download">
      <div class="prompt">
        <BulbIcon />
        <span>
          Если после клика на ссылку загрузка не пошла, проверьте не блокирует
          ли браузер скачивания архива.
        </span>
      </div>
      <div class="block-download">
        <p class="text-bold">Сылка для скачивания архива Выгрузки (.zip):</p>
        <!-- Не понял как достать ссылку для загрузки zip -->
        <a
          class="link"
          :href="`https://seenday.com/mL6OAHAEH1`"
          :download="`https://seenday.com/mL6OAHAEH1`"
          >{{ unloadItem.download_link }}</a
        >
        <span @click="copyLink" class="span-link">скопировать ссылку</span>
      </div>

      <div class="wrapper-close">
        <CloseBtn @click="$emit('close-unload-item')" text="Закрыть" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineEmits, defineProps } from "vue";
import BulbIcon from "@/components/svg/BulbIcon.vue";
import CloseBtn from "@/components/CloseBtn.vue";
import { orderStringWithoutTag } from "@/lib/helpers";
const props = defineProps(["unloadItem"]);
defineEmits(["close-unload-item"]);

function copyLink() {
  let linkId = null;
  const digits = props.unloadItem.download_link.match(/\d+/);
  if (digits && digits[0]) linkId = digits[0];

  navigator.clipboard.writeText(linkId);
}
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
  gap: 20px;
  height: 40px;
  background-color: rgb(244 247 255);

  .id {
    padding: 10px 7px;
    color: white;
    background-color: #615098;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
  }
}
.wrapper-download {
  padding: 15px;
  .close {
    display: none;
  }
}
.block-download {
  p {
    font-size: 16px;
  }
  .link {
    margin-right: 20px;
    text-decoration: none;
    color: #6a0dad;
  }
  .span-link {
    cursor: pointer;
    text-decoration: dashed;
    border-bottom: 1px dotted rgb(105, 105, 105);
    transition: 0.5s;
    &:hover {
      color: rgb(50, 50, 50);
    }
    &:active {
      color: rgb(105, 105, 105);
    }
  }
}
.prompt {
  font-size: 10px;
  background-color: rgb(244 247 255);
  padding: 5px 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 1px rgb(148, 148, 148);
  display: flex;
  align-items: center;
  gap: 5px;
  min-height: 25px;
  svg {
    min-width: 15px;
  }
  span {
    line-height: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .block-info {
    .close {
      display: none;
    }
  }

  .wrapper-close {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .wrapper-download {
    .close {
      display: block;
      margin-top: 10px;
      width: max-content;
      border-radius: 3px;
      padding: 10px 25px;
    }
  }
  .link {
    display: block;
  }
}

@media only screen and (max-width: 480px) {
  .prompt {
    gap: 20px;
  }
}
</style>