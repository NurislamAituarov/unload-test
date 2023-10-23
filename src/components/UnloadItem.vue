<template>
  <div class="block block-item">
    <p>
      Задача выполнена: <span>{{ item.date }}</span>
    </p>
    <p>
      Статус задачи: <span>{{ item.status_text }}</span>
    </p>
    <p>
      ID выгрузки: <span>{{ item.id }}</span>
    </p>
    <p>
      {{ orderStringWithoutTag(item.event) }}
    </p>
    <p>Выгружено заказов: <span>6/6</span></p>
    <p>
      Размер занрузки: <span>{{ item.size }}</span>
    </p>

    <div class="line" :class="`status-${item.status}`"></div>
  </div>
</template>


<script setup>
import { defineProps } from "vue";
import { orderStringWithoutTag } from "@/lib/helpers";
defineProps(["item"]);
</script>

<style scoped lang="scss">
.block-item {
  padding: 15px;
  padding-left: 20px;
  position: relative;
  margin-bottom: 15px;
  font-size: 14px;
  cursor: pointer;

  span {
    font-weight: bold;
    font-size: 16px;
  }
}

.line {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
}

.status-green {
  background-color: var(--color_success);
}
.status-red {
  background-color: var(--color_danger);
}
</style>