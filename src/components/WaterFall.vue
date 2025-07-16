<template>
  <h1>CSS 实现瀑布流</h1>
  <div class="container">
    <div class="item" v-for="item in data" :key="item.id">
      <img :src="item.sources['1x']" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import data from "./data.json";
</script>
<style scoped lang="scss">
.container {
  column-gap: 0;
  column-count: 4;
}
.item {
  padding: 2px;
  position: relative;
  counter-increment: item-counter;
}
.item img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
